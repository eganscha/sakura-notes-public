# cloud_computing_2025

## Overview

This project is part of the "Cloud Computing (SS 2025)" course taught by Prof. Dr. Wolfgang Wiedermann at the University of Applied Sciences Hof.

## Requirements

Developer: Eugen Ganscha

Application: Public notes platform

Image: debian/ubuntu

Programming Language: php

Database Platform: redis

## Starting the Application

1. Navigate to `infra/k8s/scripts`
2. Run the `startup.sh` script via `./startup.sh` to start kubernetes with all the required addons
3. Run the `build-deploy-portforward.sh` script via `./build-deploy-portforward.sh` to build all of the required images, deploy the kubernetes application and allow for nginx port-forwarding
4. Navigate to `http://localhost:8000` to try the application via http
5. Navigate to `https://localhost:8001` to try the application via https (certificates are self-signed, you will receive a warning about an insecure connection)
6. Run the `shutdown.sh` script via `./shutdown.sh` - This deletes the sakura-notes kubernetes namespace, and then runs minikube stop