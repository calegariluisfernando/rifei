#!/bin/bash

# Define packaging environment.
#export ETC_DIR=./backend/etc

# Define RASP configuration.
#cp $ETC_DIR/contrast_security.yaml.template $ETC_DIR/contrast_security.yaml

#sed -i -e 's|${CONTRAST_API_KEY}|'"$CONTRAST_API_KEY"'|g' $ETC_DIR/contrast_security.yaml
#sed -i -e 's|${CONTRAST_SERVICE_KEY}|'"$CONTRAST_SERVICE_KEY"'|g' $ETC_DIR/contrast_security.yaml
#sed -i -e 's|${CONTRAST_USER_NAME}|'"$CONTRAST_USER_NAME"'|g' $ETC_DIR/contrast_security.yaml

# Define packaging environment.
echo "REPOSITORY_URL=$REPOSITORY_URL" > ./iac/.env
echo "REPOSITORY_ID=$REPOSITORY_ID" >> ./iac/.env

# Build docker images.
docker-compose -f ./iac/docker-compose.yml build

ls /tmp -lsah

docker save $REPOSITORY_ID/rifei-frontend:latest -o /tmp/rifei-frontend:latest.tar

# Save images locally.
rm -f /tmp/rifei-*.tar

# Clean temporary files.
#rm $ETC_DIR/contrast_security.yaml