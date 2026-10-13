# 视频中转部署

统一使用 Docker Hub 镜像和独立 Compose，详见 [DOCKER.md](DOCKER.md)。

旧的 video-gateway.sh 部署方式已停用。Nginx、OpenList 继续由你原有的 Compose 管理；新中转只加入 Nginx 已有网络。
