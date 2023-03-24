FROM node:18.14-alpine As development

RUN corepack enable & corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app
COPY ../.. .
RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 6000

#ENTRYPOINT ["/usr/src/app/deploy/entrypoint.sh"]
