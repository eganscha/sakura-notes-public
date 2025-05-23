#!/bin/bash

# timestamp function which prints the current time in a
# Year-Month-Day_Hour_Minutes_Seconds format
timestamp() {
  echo "($(date +"%Y-%m-%d_%H-%M-%S"))"
}

# Create /app/logs directory if it doesn't exist yet
LOGS_DIR="/app/logs"
STD_LOG="/app/logs/std_log.txt"
if [ ! -d "$LOGS_DIR" ]; then
  mkdir $LOGS_DIR
  echo "$(timestamp): Created LOGS_DIR in $LOGS_DIR." >> "$STD_LOG"
fi

# Create /app/data directory if it doesn't exist yet
DATA_DIR="/app/data"
if [ ! -d "$DATA_DIR" ]; then
  mkdir $DATA_DIR
  echo "$(timestamp): Created DATA_DIR in $DATA_DIR." >> "$STD_LOG"
fi

# Create cron-file, if it doesn't exist already
# (discard both stdout and stderr, we just care if the operation succeeded)
if ! crontab -l > /dev/null 2>/dev/null; then
  crontab -
  echo "$(timestamp): Created cron-file." >> "$STD_LOG"
else 
  echo "$(timestamp): Did not create cron-file." >> "$STD_LOG"
fi

# Check if the current crontab contains a line that matches $BACKUP_SCRIPT
# Add it if it does not
BACKUP_SCRIPT="/app/backup_script.sh"
if ! crontab -l | grep -Fq "$BACKUP_SCRIPT"; then 
  # write out current crontab to a temp file
  crontab -l > temp_crontab

  # Schedule backups as specified in the redisdb.env file
  # or every 10 minutes of not specified at all
  if [ -n "$CRON_SCHEDULING" ]; then
    echo "$CRON_SCHEDULING $BACKUP_SCRIPT" >> temp_crontab
    
    echo "$(timestamp): Scheduled backups via cron-pattern: [ $CRON_SCHEDULING ]." >> "$STD_LOG"
  else
    echo "*/10 * * * * $BACKUP_SCRIPT" >> temp_crontab
    
    echo "$(timestamp): Scheduled backups via DEFAULT cron-pattern: [ */10 * * * * ]." >> "$STD_LOG"
  fi

  # install new cron file and remove temp_crontab
  crontab temp_crontab
  rm temp_crontab
fi

# Execute the CMD command as a command,
# don't treat it as a parameter
exec "$@"