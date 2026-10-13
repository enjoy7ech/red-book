#!/usr/bin/env bash
set -euo pipefail
printf 'The old script deployment is retired. Use deploy/compose.video.yml with the published Docker Hub image.\n' >&2
printf 'See https://github.com/enjoy7ech/red-book/blob/main/deploy/DOCKER.md\n' >&2
exit 1
