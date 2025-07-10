#!/bin/bash

# timestamp function which prints the current time in a
# Year-Month-Day_Hour_Minutes_Seconds format
timestamp() {
  date +"%Y-%m-%d_%H-%M-%S"
}

STD_LOG="/data/db/logs/std_log.txt"
ENV_FILE="/etc/redisdb.env"

DATA_DIR="/data/db/data"
BACKUP_DIR="${DATA_DIR}/backups"

# Load ENV_FILE
if [ ! -f "$ENV_FILE" ]; then
  echo "backup_script.sh could not find \$ENV_FILE at $ENV_FILE" >> "$STD_LOG"
  exit 1
fi
. "$ENV_FILE"

# Check if REDIS_PASSWORD ENV_VAR exists
if [ -z "${REDIS_PASSWORD:-}" ]; then
    echo "\$REDIS_PASSWORD ENV_VAR was not set when read by backup_script.sh" >> "$STD_LOG"
    exit 1
fi

# Initiate a backup
# If a snapshot exists, LAST_TIMESTAMP equal to the LASTSAVE timestamp, otherwise it will return the start time of the database
LAST_TIMESTAMP=$(redis-cli -a "$REDIS_PASSWORD" LASTSAVE)

# Create the snapshot via BGSAVE
redis-cli -a "$REDIS_PASSWORD" BGSAVE

# Wait for BGSAVE to commence
CURRENT_TIMESTAMP=$(redis-cli -a "$REDIS_PASSWORD" LASTSAVE)
while [ "$CURRENT_TIMESTAMP" -le "$LAST_TIMESTAMP" ]
do
    sleep 5
    CURRENT_TIMESTAMP=$(redis-cli -a "$REDIS_PASSWORD" LASTSAVE)
done

# Copy made snapshot to the backups directory
cp "${DATA_DIR}/snapshot.rdb" "${BACKUP_DIR}/$(timestamp)-backup.rdb"