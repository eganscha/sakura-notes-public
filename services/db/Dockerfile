# Ubuntu Noble LTS
FROM ubuntu:24.04

WORKDIR /app

COPY ./redis.conf /app

# Install "Redis Open Source on Linux" as described by the official documentation:
# https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/apt/
# (update twice because we add a new source)
# Install cron to schedule the back-up scripts regular execution
RUN apt-get update \
    && apt-get install -y lsb-release curl gpg \
    && curl -fsSL https://packages.redis.io/gpg | gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg \
    && chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb noble main" | tee /etc/apt/sources.list.d/redis.list \
    && apt-get update \
    && apt-get install -y redis \
    && apt-get install -y cron

# Copy the backup_script
COPY ./backup_script.sh /usr/local/bin/

# Copy and execute the docker-entrypoint script
# and subsequently launch the redis-server as a result of it
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT [ "docker-entrypoint.sh" ]

EXPOSE 6379

CMD ["sh", "-c", "redis-server ./redis.conf --requirepass ${REDIS_PASSWORD}"]