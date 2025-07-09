#!/bin/bash

# Global Files First
kubectl apply -f ../common/namespace.yaml
kubectl apply -f ../common/global-config.yaml
kubectl apply -f ../common/global-secrets.yaml

# DB
kubectl apply -f ../db/config.yaml
kubectl apply -f ../db/statefulset.yaml
kubectl apply -f ../db/service.yaml

# Backend
kubectl apply -f ../backend/api-logs-pvc.yaml
kubectl apply -f ../backend/deployment.yaml
kubectl apply -f ../backend/service.yaml

# Frontend
kubectl apply -f ../frontend/deployment.yaml
kubectl apply -f ../frontend/service.yaml

# Ingress
# Apply the .pem certs if the Ingress tls-secrets don't exist yet
if ! kubectl get secret sakura-notes-tls -n sakura-notes >/dev/null 2>&1; then
    echo "Creating TLS secret \"sakura-notes-tls\"."

    kubectl create secret tls sakura-notes-tls \
    --namespace sakura-notes \
    --cert=../../../services/ingress/ssl_local_certificate/fullchain.pem \
    --key=../../../services/ingress/ssl_local_certificate/privkey.pem
else
    echo "TLS secret \"sakura-notes-tls\" already present."
fi

kubectl apply -f ../ingress/ingress.yaml