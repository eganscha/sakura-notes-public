# cloud_computing_2025

## Student Technology Mapping

Developer: Eugen Ganscha

Application: Public notes platform

Image: debian/ubuntu

Programming Language: php

Database Platform: redis

## Project Overview

| <img src="./readme_imgs/Project-Structure-Tree.png" width="500"> | The project is structured into two main blocks.<br><br>servies/<br>Source code and Dockerfiles for each project component (backend, frontend, nginx, redis, etc.). Anything that is required to build the Docker Images locally also lives here (with exception of the .env files and secrets).<br><br>infra/<br>"Glue" to run those images with either docker-compose, or k8s.<br><br>infra/compose/<br>Contains the docker-compose.yaml and .env files.<br><br>infra/k8s/<br>Contains Kubernetes specific .yaml files.|
|---|---|

## Project Highlights

The services are all implemented with more realistic technologies than was minimally required and are closer to real-world environments (Backend in Laravel, Frontend in React, etc.).

Load Balancing is supported for both **k8s (via Ingress or "raw" Nginx)**, and **docker-compose (via Nginx)**.

HTTPS is supported for all environments and launch configurations.

The database takes regular backups of the redis-snapshots and writes them onto a mounted volume. The frequency can be configured via a **cron sheduling pattern** in the **redisdb.env file for compose** or **db/config.yaml for k8s**.

Scripts that manage deployment and building for different configurations.

## Notes

**Expected Operating System: Linux or macOS**

The .env and secrets.yaml files are for demonstration purposes only.

## Starting the Application via (Kubernetes + Ingress)

1. **Navigate to the scripts folder**

   ```cd infra/k8s/scripts```

2. **Run ./start.sh ingress**

   ```./start.sh ingress```

   (Also launches minikube with all the required addons, if it's not already running).

3. **[If using macOS] - Run sudo minikube tunnel in a separate terminal**

    ```sudo minikube tunnel```

4. **Add sakura.notes to /etc/hosts:**
    
    Add the following line to `/etc/hosts`
    
    `127.0.0.1  sakura.notes`

5. **Connect to the application via http:**

    Navigate to `http://sakura.notes` in your browser.
    
    (You will be re-directed to the https:// version of the website.)

6. **Connect to the application via https:**

    Navigate to `https://sakura.notes` in your browser.

7. **[If using macOS] - Press Ctrl + C in the minikube tunnel terminal**
    
    This will ensure that the minikube tunnel terminates correctly.

8. **Run ./shutdown.sh**

    Run `./shutdown.sh`
    
    This deletes the sakura-notes kubernetes namespace and then runs minikube stop.


## Starting the Application via (Kubernetes + Nginx)

1. **Navigate to the scripts folder:**

   `cd infra/k8s/scripts`

2. **Run ./start.sh nginx**

   ```./start.sh nginx```

   (Also launches minikube with all the required addons, if it's not already running).

3. **Connect to the application via http:**
    
    Navigate to `http://localhost:8000` in your browser.

4. **Connect to the application via https:**
    
    Navigate to `https://localhost:8001` in your browser.

5. **Run ./shutdown.sh**

    Run `./shutdown.sh`
    
    This deletes the sakura-notes kubernetes namespace, and then runs minikube stop.


## Starting the Application via docker-compose:

1. **Navigate to the compose folder:**

   `cd infra/compose`

2. **Run docker-compose up -d inside the infra/compose folder:**

    Run `docker-compose up -d`

    This will launch the application via docker-compose. For load-balancing nginx will be used.

3. **Connect to the application via http:**

    Navigate to `http://localhost:8000` in your browser.

4. **Connect to the application via https:**

    Navigate to `https://localhost:8001` in your browser.

5. **Run docker-compose down inside the infra/compose folder:**

    Run `docker-compose down`

    This will shut-down the application via docker-compose.