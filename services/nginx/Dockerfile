# Ubuntu Noble LTS
FROM ubuntu:24.04

WORKDIR /app

# Copy files into the /app directory that are not nginx configuration files
# (Those will have to be COPIED later)
COPY docker-entrypoint.sh ./

# Install nginx
RUN apt-get -y update \
    && apt-get install -y nginx

# Copy configuration files AFTER installation (important, as nginx overwrites them otherwise)
COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl_local_certificate/ /etc/nginx/ssl/

# Move and execute the docker-entrypoint script
# and subsequently launch nginx
RUN mv ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT [ "docker-entrypoint.sh" ]

EXPOSE 80 443
# Start nginx, but not as a daemon, to ensure it runs as a foreground task for docker
CMD ["nginx", "-g", "daemon off;"]