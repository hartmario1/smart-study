FROM node:16-alpine
LABEL name "api builder"

WORKDIR /opt/build

RUN apk add --update \
&& apk add --no-cache ca-certificates \
&& apk add --no-cache --virtual .build-deps curl

COPY libs/common/package.json ./libs/common/
COPY libs/injection/package.json ./libs/injection/
COPY libs/logger/package.json ./libs/logger/
COPY libs/rest/package.json ./libs/rest/
COPY services/api/package.json ./services/api/
COPY package.json tsconfig.json ./

RUN npm i --frozen-lockfile && apk del .build-deps

FROM node:16-alpine
LABEL name "api"

EXPOSE 4200

WORKDIR /usr/api

COPY --from=0 /opt/build ./

CMD ["node", "--enable-source-maps", "services/api/dist/index.js"]
