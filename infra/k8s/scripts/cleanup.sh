#/bin/bash

minikube stop

kubectl delete namespace sakura-notes

# docker image prune -f