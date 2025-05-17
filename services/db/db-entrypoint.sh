#!/bin/bash
 
 DIR="/app/data"
if [ ! -d "$DIR" ]; then
  echo "Creating directory in $DIR."
  mkdir $DIR
fi

# Execute the CMD command as a command,
# don't treat it as a parameter
exec "$@"