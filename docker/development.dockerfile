FROM oven/bun:1.0.26-slim as base

WORKDIR /app

CMD [ "bun", "./docker/docker-entry.ts" ]
