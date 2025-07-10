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

- The services are all implemented with more realistic technologies than was minimally required and are closer to real-world environments (Backend in Laravel, Frontend in React, etc.). This makes the containers more realistic.

- Load Balancing is supported for both **k8s (via Ingress)**, and **docker-compose (via Nginx)**.

- HTTPS is supported for all environments and launch configurations.

- The database takes regular backups of the redis-snapshots and writes them onto a mounted volume. The frequency can be configured via a **cron sheduling pattern** in the **redisdb.env file for compose** or **db/config.yaml for k8s**. The script and behaviour is defined in **/services/db/backup_script.sh** and **/services/db/docker-entrypoint.sh**.


## Notes

The .env and secrets.yaml files are for demonstration purposes only.

## Requirements

- Supported Operating Systems: **Linux** and **macOS**

- **docker** and **docker compose**

- **kubectl** and **minikube**

- **OpenSSL** (most likely installed by default already)

- **Bash** (most likely installed by default already)


## Running the Application via (Kubernetes + Ingress)

1. **Navigate to the scripts folder**

   ```cd cloud_computing_2025/infra/k8s/scripts```

2. **Run ./start.sh**

   ```./start.sh```

   (Also launches minikube with all the required addons, if it's not already running).

3. **[If using macOS] - Run sudo minikube tunnel in a separate terminal**

    ```sudo minikube tunnel```

4. **Add sakura.notes to /etc/hosts:**
    
    Add the following line to `/etc/hosts`
    
    **macOS:** `127.0.0.1  sakura.notes`

    **Linux:** `192.168.49.2  sakura.notes`

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


## Running the Application via (docker-compose + nginx):

1. **Navigate to the compose folder:**

   `cd cloud_computing_2025/infra/compose`

2. **Run docker compose up inside the infra/compose folder:**

    Run `docker compose up --build`

    This will launch the application via docker-compose. For load-balancing nginx will be used.

3. **Connect to the application via http:**

    Navigate to `http://localhost:8000` in your browser.

4. **Connect to the application via https:**

    Navigate to `https://localhost:8001` in your browser.

5. **Press Ctrl + C inside your terminal window:**

    This will shut-down the docker-compose application.