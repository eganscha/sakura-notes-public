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

# Global Files First
kubectl apply -f ../common/namespace.yaml
kubectl apply -f ../common/global-config.yaml
kubectl apply -f ../common/global-secrets.yaml

# DB
kubectl apply -f ../db/statefulset.yaml
kubectl apply -f ../db/service.yaml

# Backend
kubectl apply -f ../backend/api-logs-pvc.yaml
kubectl apply -f ../backend/deployment.yaml
kubectl apply -f ../backend/service.yaml

# Frontend
kubectl apply -f ../frontend/deployment.yaml
kubectl apply -f ../frontend/service.yaml

# Start with either Nginx, or Ingress, depending on the passed mode (or default to Ingress)
if [[ $MODE == "nginx" ]]; then
    # Nginx
    kubectl apply -f ../nginx/deployment.yaml
    kubectl apply -f ../nginx/service.yaml
else
    # Ingress
    kubectl apply -f ../ingress/ingress.yaml
fi