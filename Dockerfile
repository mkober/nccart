FROM node:16-alpine

WORKDIR /app

RUN apk add --no-cache build-base git python3 util-linux \
  vips-dev autoconf libtool dpkg pkgconfig nasm \
  libpng autoconf automake libtool tiff jpeg \
  zlib zlib-dev pkgconf nasm file g++ make

COPY ./package.json ./yarn.lock ./

COPY . .

RUN yarn install && yarn cache clean

EXPOSE 8000
