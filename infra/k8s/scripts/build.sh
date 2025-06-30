#!/bin/bash

DB_IMG=sakura-notes-redisdb
BACKEND_IMG=sakura-notes-backend

docker build -t $DB_IMG:latest ../../../services/db
docker build -t $BACKEND_IMG:latest ../../../services/backend/sakura-notes-laravel-api

mkdir -p tmp
docker save -o tmp/$DB_IMG.tar $DB_IMG:latest
docker save -o tmp/$BACKEND_IMG.tar $BACKEND_IMG:latest

minikube image load tmp/$DB_IMG.tar
minikube image load tmp/$BACKEND_IMG.tar

rm -r ./tmp