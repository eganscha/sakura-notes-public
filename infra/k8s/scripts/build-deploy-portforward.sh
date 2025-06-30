#!/bin/bash

# ./build.sh
./deploy.sh

# Delete Port-Forwarding Later or Keep?
kubectl port-forward services/backend 8000:8000 -n sakura-notes