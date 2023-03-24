#!/bin/sh
set -e

SERVICE_NAME='cpm-users-service'
COMPOSE_FILE='docker-compose.yml'

docker-compose --project-name $SERVICE_NAME -f $COMPOSE_FILE up
