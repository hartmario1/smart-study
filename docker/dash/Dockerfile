FROM node:20-alpine
LABEL name "smartstudy dash"

ARG DASH_ENV=dev
ENV DASH_ENV=${DASH_ENV}

WORKDIR /usr/dash

EXPOSE 3000

RUN apk add --update \
  && apk add --no-cache ca-certificates \
  && apk add --no-cache --virtual .build-deps curl

RUN corepack enable & corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json ./

COPY libs/common/package.json ./libs/common/
COPY services/dash/package.json ./services/dash/

RUN pnpm i --frozen-lockfile

COPY libs/common ./libs/common
COPY services/dash ./services/dash

RUN if [ "$DASH_ENV" = "prod" ]; then pnpm run build; fi
RUN pnpm prune --prod

CMD if [ "$DASH_ENV" = "prod" ]; then pnpm run --filter @smartstudy/dash start; else pnpm run --filter @smartstudy/dash dev; fi
