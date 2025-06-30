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

Follow these steps to start and test the Sakura-Notes application via Kubernetes:

1. **Navigate to the scripts folder:**

   `cd infra/k8s/scripts`

2. **Run the startup script to start kubernetes with addons:**

   Run `./startup.sh`

   This starts kubernetes with all the required addons.

3. **Run the build-deploy-portforward script:**

    Run `./build-deploy-portforward.sh`

    This builds all of the required images, deploys the kubernetes application and allows for nginx port-forwarding.

4. **Connect to the application via http:**

    Navigate to `http://localhost:8000` in your browser.

5. **Connect to the application via https:**

    Navigate to `https://localhost:8001` in your browser.

    (The certificates are self-signed, you will receive a warning about establishing an insecure connection).

6. **Run the shutdown.sh script to delete the sakura-notes kubernetes namespace and stop minikube:**

    Run `./shutdown.sh`
    
    This deletes the sakura-notes kubernetes namespace, and then runs minikube stop.