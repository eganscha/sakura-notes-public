#!/bin/bash

BACKEND_IMG=sakura-notes-backend
DB_IMG=sakura-notes-redisdb

docker build -t $BACKEND_IMG:latest ../../../services/backend/sakura-notes-laravel-api
docker build -t $DB_IMG:latest ../../../services/db

mkdir -p tmp
docker save -o tmp/$BACKEND_IMG.tar $BACKEND_IMG:latest
docker save -o tmp/$DB_IMG.tar $DB_IMG:latest

minikube image load tmp/$BACKEND_IMG.tar
minikube image load tmp/$DB_IMG.tar

rm -r ./tmp