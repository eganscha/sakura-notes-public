#!/bin/bash

# At least one parameter has to be passed to the script to determine the target O.S.
# The script accepts no more than two parameters
if [[ $# -lt 1 ]] || [[ $# -gt 2 ]]; then
    echo "Invalid number of parameters passed. Expected: 1-2"
    echo "\$0 (required) - Target O.S. (linux, macOS)"
    echo "\$1 (optional) - Target Mode (ingress, nginx)"

    exit 1
fi

# Make sure the first argument passed is a valid target O.S.
# (no default can be given here, as we don't know for certain the O.S. the user is running)
TARGET_OS=""
case "$1" in
    linux|Linux|LINUX)
        echo "TARGET_OS=\"linux\""
        TARGET_OS="linux"
        ;;
    macos|macOS|MACOS)
        echo "TARGET_OS=\"macos\""
        TARGET_OS="macos"
        ;;
    *)
        echo "Param \$1 was invalid. Expected Target O.S. in the form of (linux, macOS)"
        exit 1
        ;;
esac

# Default mode is ingress, if no second parameter is passed
MODE="ingress"
# Change the default mode, if a valid mode argument has been passed as $2
if [[ $# -gt 1 ]]; then
    case "$2" in
        nginx|Nginx|NGINX)
            echo "Starting sakura-notes application in nginx mode."
            MODE="nginx"
            ;;
        *)
            echo "Starting sakura-notes application in ingress mode."
            MODE="ingress"
            ;;
    esac
fi

# Start minikube with the required addons, if it's not already running
if ! minikube status >/dev/null 2>&1; then
    if [[ "$MODE" == nginx ]]; then
        echo "Starting Minikube with ingress DISABLED."
        minikube start --addons=storage-provisioner,default-storageclass,registry
    else
        echo "Starting Minikube with ingress ENABLED."
        minikube start --addons=storage-provisioner,default-storageclass,ingress,registry
    fi
else
    echo "Minikube is already running. Please make sure the required addons for your target mode are enabled."
fi

# Run minikube tunnel if the mode is ingress, the target O.S. is macos
# and minikube tunnel is not already running
if [[ "$MODE" == "ingress" ]] && [[ "$TARGET_OS" == "macos" ]]; then
    if ! ps aux | grep '[m]inikube tunnel' >/dev/null 2>&1; then
        echo "starting minikube tunnel via sudo for macOS in the background."
        # (-p fails silently, if the script is re-run)
        mkdir -p tmp
        sudo nohup minikube tunnel > "./tmp/minikube-tunnel-pid.log" 2>&1 &
    else
        echo "minikube tunnel already running."
    fi
fi

# Build & Deploy
./build.sh "$MODE"
./deploy.sh "$MODE"

# Nginx Port Forward, if nginx has been selected as the mode
if [[ "$MODE" == "nginx" ]]; then
    # Wait for nginx pod to become ready and then forward both http and https traffic
    echo "Waiting for nginx pod to become ready."
    kubectl wait --for=condition=ready pod -l app=nginx -n sakura-notes --timeout=60s

    echo "Nginx port-forward enabled for 8000:80 and 8001:443."
    kubectl port-forward services/nginx 8000:80 -n sakura-notes &
    kubectl port-forward services/nginx 8001:443 -n sakura-notes
fi