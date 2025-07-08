#!/bin/bash

# Default mode is ingress, if no parameters are passed
MODE="ingress"
# Change the default mode, if a valid mode argument has been passed
if [[ $# -gt 0 ]]; then
    case "$1" in
        nginx|Nginx|NGINX)
            MODE="nginx"
            ;;
        *)
            MODE="ingress"
            ;;
    esac
fi

DB_IMG=sakura-notes-redisdb
BACKEND_IMG=sakura-notes-backend
FRONTEND_IMG=sakura-notes-frontend
NGINX_IMG=sakura-notes-nginx

docker build -t $DB_IMG:latest ../../../services/db
docker build -t $BACKEND_IMG:latest ../../../services/backend/sakura-notes-laravel-api
docker build -t $FRONTEND_IMG:latest ../../../services/frontend/sakura-notes-frontend
if [[ $MODE == "nginx" ]]; then
    docker build -t $NGINX_IMG:latest ../../../services/nginx
fi

mkdir -p tmp
docker save -o tmp/$DB_IMG.tar $DB_IMG:latest
docker save -o tmp/$BACKEND_IMG.tar $BACKEND_IMG:latest
docker save -o tmp/$FRONTEND_IMG.tar $FRONTEND_IMG:latest
if [[ $MODE == "nginx" ]]; then
    docker save -o tmp/$NGINX_IMG.tar $NGINX_IMG:latest
fi

minikube image load tmp/$DB_IMG.tar
minikube image load tmp/$BACKEND_IMG.tar
minikube image load tmp/$FRONTEND_IMG.tar
if [[ $MODE == "nginx" ]]; then
    minikube image load tmp/$NGINX_IMG.tar
fi

rm -r ./tmp