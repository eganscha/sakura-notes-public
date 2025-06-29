#!/bin/bash

BACKEND_IMG=sakura-notes-backend

docker build -t $BACKEND_IMG:latest ../../../services/backend/sakura-notes-laravel-api

mkdir -p tmp
docker save -o tmp/$BACKEND_IMG.tar $BACKEND_IMG:latest

minikube image load tmp/$BACKEND_IMG.tar

rm -r ./tmp