# Docker Hub 镜像部署

源码和默认的四科课程配置内置于 `Dockerfile.video` 构建的镜像。镜像不包含账号、Cookie 或本机运行目录。服务器只需 Compose 文件和 `.env`，不再下载源码或创建独立的 docker run 容器。

## 发布镜像

已发布镜像：`enjoytech/red-book-video-gateway:1.0.0`（Linux amd64），同时提供 `latest`。在仓库根目录构建并推送：

```sh
docker build --platform linux/amd64 -f Dockerfile.video -t enjoytech/red-book-video-gateway:1.0.0 .
docker push enjoytech/red-book-video-gateway:1.0.0
```

Compose 固定使用 `1.0.0`，更新镜像时应发布新的版本 tag 并更新 Compose。

## 服务器部署

保持 Nginx、OpenList 现有的 Compose 和网络配置。先查询 Nginx 已有网络：

```bash
docker inspect nginx --format '{{range $name, $config := .NetworkSettings.Networks}}{{println $name}}{{end}}'
```

下载 `compose.video.yml` 和 `.env.example` 到服务器 `/opt/red-book-video/`。将 `.env.example` 复制为 `.env`，填写 Nginx 现有网络名、OpenList 用户名和密码。密码使用单引号包裹，避免 `$` 被 Compose 当作变量展开。`chmod 600 .env`。推荐使用仅有课程目录读取权限的账号。

```bash
mkdir -p /opt/red-book-video
cd /opt/red-book-video
curl -fsSL https://raw.githubusercontent.com/enjoy7ech/red-book/main/deploy/compose.video.yml -o compose.video.yml
curl -fsSL https://raw.githubusercontent.com/enjoy7ech/red-book/main/deploy/.env.example -o .env.example
```

```bash
cd /opt/red-book-video
docker compose -f compose.video.yml config --quiet
docker compose -f compose.video.yml pull
docker compose -f compose.video.yml up -d
docker compose -f compose.video.yml ps
docker compose -f compose.video.yml logs --tail 30
```

中转只加入 Nginx 已有网络，通过宿主机发布的 5244 端口访问 OpenList。Compose 不管理、更改或重建 Nginx、OpenList，不创建额外共享网络。中转端口不发布到公网，Nginx 在共享的用户定义网络中通过 `video-gateway:5245` 访问它。

Nginx 站点保留以下代理：

```nginx
location /api/cloud-video/ {
    proxy_pass http://video-gateway:5245;
    proxy_set_header Host 127.0.0.1:5245;
    proxy_buffering off;
    proxy_read_timeout 300s;
}
```

等中转显示 `healthy` 后执行 `docker restart nginx`。Nginx 原有网络需要支持 Docker 容器名称解析。若宿主机使用 rootless Docker 或自定义 host-gateway，需按宿主机实际可访问地址配置 `OPENLIST_URL`。

验证：

```bash
curl -fsS 'https://lovehuanhuan.dongzx.site/api/cloud-video/catalog?subject=zy1'
```

如果旧脚本创建的 `video-gateway` 与 Compose 存在名称冲突，只移除旧的中转容器再启动此 Compose；不动其他容器。旧 `.mjs`、课程配置和账号文件不再是镜像部署的依赖。
