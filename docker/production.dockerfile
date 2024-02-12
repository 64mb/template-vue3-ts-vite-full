# build stage
FROM oven/bun:1.0.26-slim as build-stage

WORKDIR /app

FROM build-stage AS build-stage-install

RUN mkdir -p /temp/cache

COPY package.json bun.lockb /temp/cache/

RUN cd /temp/cache && bun install --frozen-lockfile --production

FROM build-stage AS build-stage-build

COPY --from=build-stage-install /temp/cache/node_modules node_modules

COPY . .

RUN bun run build

# production-stage
FROM nginx:1.25.3-alpine-slim as production-stage

RUN mkdir /app

COPY --from=build-stage-build /app/dist /app

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
