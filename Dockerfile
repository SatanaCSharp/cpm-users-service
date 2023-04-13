FROM node:18.14-alpine As development

RUN corepack enable & corepack prepare pnpm@latest --activate

WORKDIR /var/www/html/app
RUN apk add --no-cache git
COPY ../.. .
RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 6000

#ENTRYPOINT ["/usr/src/app/deploy/entrypoint.sh"]
