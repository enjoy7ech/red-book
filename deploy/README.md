# 视频中转部署

服务器已运行名为 `nginx`、`openlist` 的 Docker 容器时，执行：

```bash
curl -fsSL https://raw.githubusercontent.com/enjoy7ech/red-book/main/deploy/video-gateway.sh -o /tmp/red-book-video-deploy.sh
bash /tmp/red-book-video-deploy.sh
```

首次执行会询问 OpenList 用户名和密码。脚本创建独立的 `red-book-video` 网络，将两个现有容器接入，启动 `video-gateway`；不会修改 OpenList 数据目录。凭据保存在服务器 `/opt/red-book-video/webdav-account.json`，仅供后端使用。推荐使用仅有课程目录读取权限的 OpenList 账号。中转仅允许四个配置好的课程目录，登录凭据不返回给浏览器。中转端口不发布到公网。

Nginx 的站点配置需要有以下规则：

```nginx
location /api/cloud-video/ {
    proxy_pass http://video-gateway:5245;
    proxy_set_header Host 127.0.0.1:5245;
    proxy_buffering off;
    proxy_read_timeout 300s;
}
```

中转启动并验证成功后，脚本检查 Nginx 配置并重新加载。课程目录配置在 `deploy/site-video-config.json`。修改配置后可在服务器更新 `/opt/red-book-video/site-video-config.json` 并重启中转。重新执行脚本会更新源码及课程配置，保留现有账号文件。

Nginx 或 OpenList 容器日后被 Compose 重建时，需要让 Compose 保留共享网络，或者重新执行部署脚本接入网络。

验证：

```bash
docker logs --tail 20 video-gateway
curl -fsS 'https://lovehuanhuan.dongzx.site/api/cloud-video/catalog?subject=zy1'
```
