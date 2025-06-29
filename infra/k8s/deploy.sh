#!/bin/bash
kubectl apply -f ./common/namespace.yaml
kubectl apply -f ./common/global-config.yaml
kubectl apply -f ./common/global-secrets.yaml