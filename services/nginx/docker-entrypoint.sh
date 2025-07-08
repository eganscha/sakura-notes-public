#!/bin/bash

# Substitute the env variable inside of the nginx.conf.template and pass the output into an nginx.conf file
envsubst '${NGINX_BACKEND_SERVERS}' \
    < /etc/nginx/nginx.conf.template \
    > /etc/nginx/nginx.conf

# Execute the CMD command as a command,
# don't treat it as a parameter
exec "$@"