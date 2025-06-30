#!/bin/bash

# Build & Deploy
./build.sh
./deploy.sh

# Port Forward
# Wait for nginx pod to become ready and then forward both http and https traffic
kubectl wait --for=condition=ready pod -l app=nginx -n sakura-notes --timeout=60s
kubectl port-forward services/nginx 8000:80 -n sakura-notes &
kubectl port-forward services/nginx 8001:443 -n sakura-notes