#!/bin/sh

set -e
ENV=${ENV:-local}

if [ "$ENV" = "local" ]; then
   cd deploy/local || exit
   docker network create public || true
   bash ./entrypoint.sh
else
 # todo refactor with prod deploy
  cd /app || exit
  export PORT=${PORT-7000}
  exec pnpm start:dev
fi

