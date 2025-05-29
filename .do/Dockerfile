FROM node:22-alpine

# qwik does not build ssg with only bun :(
ADD https://github.com/oven-sh/bun/releases/download/bun-v1.2.15/bun-linux-x64-musl-baseline.zip .

RUN apk update && apk add unzip

RUN unzip bun-linux-x64-musl-baseline.zip

RUN mv /bun-linux-x64-musl-baseline/bun /usr/bin && rmdir /bun-linux-x64-musl-baseline

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

RUN bun run build
