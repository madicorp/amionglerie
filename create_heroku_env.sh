#!/bin/bash

cat .env | while read line; do
    if [ -z "$line" ]; then
     continue
    fi
    echo "Creating $line ....."
    heroku config:set "$line" --app amionglerie
done