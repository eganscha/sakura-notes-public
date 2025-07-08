#!/bin/bash

# Default mode is ingress, if no parameter is passed
MODE="ingress"
if [[ $# -gt 0 ]]; then
    case "$1" in
        nginx|Nginx|NGINX)
            echo "Starting sakura-notes application in nginx mode."
            MODE="nginx"
            ;;
        *)
            echo "Starting sakura-notes application in ingress mode."
            MODE="ingress"
            ;;
    esac
fi

# Start minikube with the required addons, if it's not already running
if ! minikube status >/dev/null 2>&1; then
    if [[ "$MODE" == nginx ]]; then
        echo "Starting Minikube with ingress DISABLED."
        minikube start --addons=storage-provisioner,default-storageclass,registry
    else
        echo "Starting Minikube with ingress ENABLED."
        minikube start --addons=storage-provisioner,default-storageclass,ingress,registry
    fi
else
    echo "Minikube is already running. Please make sure the required addons for your target mode are enabled."
fi

# Build & Deploy
./build.sh "$MODE"
./deploy.sh "$MODE"

# Nginx Port Forward, if nginx has been selected as the mode
if [[ "$MODE" == "nginx" ]]; then
    # Wait for nginx pod to become ready and then forward both http and https traffic
    echo "Waiting for nginx pod to become ready."
    kubectl wait --for=condition=ready pod -l app=nginx -n sakura-notes --timeout=60s

    echo "Nginx port-forward enabled for 8000:80 and 8001:443."
    kubectl port-forward services/nginx 8000:80 -n sakura-notes &
    kubectl port-forward services/nginx 8001:443 -n sakura-notes
fi