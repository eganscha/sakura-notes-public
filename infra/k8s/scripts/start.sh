#!/bin/bash

# Start minikube with the required addons, if it's not already running
if ! minikube status >/dev/null 2>&1; then
    echo "Starting Minikube with ingress ENABLED."
    minikube start --addons=storage-provisioner,default-storageclass,ingress,registry
else
    echo "Minikube is already running. Please make sure the required addons for your target mode are enabled."
fi

# Build & Deploy
./build.sh
./deploy.sh