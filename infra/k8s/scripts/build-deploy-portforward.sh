#!/bin/bash

# Build & Deploy
./build.sh
./deploy.sh

# Port Forward
# Wait for backend pod to become ready and then forward 8000:8000
kubectl wait --for=condition=ready pod -l app=backend -n sakura-notes --timeout=60s
kubectl port-forward services/backend 8000:8000 -n sakura-notes
# Wait for frontend pod to become ready and then forward 5173:5173
kubectl wait --for=condition=ready pod -l app=frontend -n sakura-notes --timeout=60s
kubectl port-forward services/frontend 5173:5173 -n sakura-notes