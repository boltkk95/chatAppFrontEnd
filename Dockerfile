FROM node:18-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Add support for sudo
RUN apk update && apk add sudo \
    curl \
    bash

COPY . .

RUN yarn install && yarn build

CMD [ "yarn", "start" ]

HEALTHCHECK --start-period=180s --interval=60s  \
    CMD curl -f http://localhost:3000/healthcheck || exit 1