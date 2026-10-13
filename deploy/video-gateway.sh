#!/usr/bin/env bash
set -euo pipefail

task_dir=/opt/red-book-video
task_network=red-book-video
task_raw=https://raw.githubusercontent.com/enjoy7ech/red-book/main
docker inspect nginx openlist >/dev/null
mkdir -p "$task_dir"
chmod 700 "$task_dir"
curl -fsSL "$task_raw/scripts/cloud-video-server.mjs" -o "$task_dir/cloud-video-server.mjs"
curl -fsSL "$task_raw/deploy/site-video-config.json" -o "$task_dir/site-video-config.json"
docker pull node:24-alpine

if [ ! -s "$task_dir/webdav-account.json" ]; then
  read -r -p 'OpenList username [admin]: ' task_username
  task_username=${task_username:-admin}
  read -r -s -p 'OpenList password: ' task_password
  printf '\n'
  printf '%s\n%s\n' "$task_username" "$task_password" |
    docker run --rm -i --network none -v "$task_dir:/runtime" node:24-alpine node --input-type=module -e '
      import {writeFileSync} from "node:fs";
      let input="";
      for await (const chunk of process.stdin) input+=chunk;
      const [username,password]=input.split("\n");
      if(!username||!password)process.exit(1);
      writeFileSync("/runtime/webdav-account.json",JSON.stringify({username,password}),{mode:0o600});
    '
  unset task_password
fi

docker network inspect "$task_network" >/dev/null 2>&1 || docker network create "$task_network" >/dev/null
for task_container in nginx openlist; do
  if ! docker inspect --format '{{json .NetworkSettings.Networks}}' "$task_container" | grep -q '"red-book-video"'; then
    docker network connect "$task_network" "$task_container"
  fi
done
if docker container inspect video-gateway >/dev/null 2>&1; then
  docker rm -f video-gateway >/dev/null
fi
docker run -d --name video-gateway --restart unless-stopped \
  --network "$task_network" \
  -e RED_BOOK_VIDEO_RUNTIME=/app \
  -v "$task_dir:/app:ro" \
  --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 \
  node:24-alpine node /app/cloud-video-server.mjs >/dev/null

for task_attempt in $(seq 1 15); do
  if docker exec video-gateway node --input-type=module -e '
    const response=await fetch("http://127.0.0.1:5245/api/cloud-video/catalog?subject=zy1");
    const data=await response.json();
    if(!response.ok||!Array.isArray(data.lessons))process.exit(1);
    console.log("Video gateway ready: "+data.lessons.length+" lessons");
  '; then
    docker exec nginx nginx -t
    docker exec nginx nginx -s reload
    printf 'Gateway started and Nginx reloaded. Refresh the video classroom.\n'
    exit 0
  fi
  sleep 2
done
docker logs --tail 20 video-gateway
printf 'Gateway verification failed. Check the OpenList account and course paths.\n' >&2
exit 1
