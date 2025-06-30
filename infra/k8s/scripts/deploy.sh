#!/bin/bash

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