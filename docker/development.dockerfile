FROM oven/bun:1.0.26-slim as base

WORKDIR /app

RUN bun install --global nodemon

CMD [ "bun", "./docker/docker_entry.ts" ]
