#!/usr/bin/env bash

CONTAINER_NAME=mongo

docker stop $CONTAINER_NAME
docker container rm $CONTAINER_NAME
