#!/bin/bash

# Global Files First
kubectl apply -f ../common/namespace.yaml
kubectl apply -f ../common/global-config.yaml
kubectl apply -f ../common/global-secrets.yaml

# Backend
kubectl apply -f ../backend/deployment.yaml
kubectl apply -f ../backend/service.yaml