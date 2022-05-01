#!/bin/bash


# Authenticate in the packaging repository.
echo $REPOSITORY_PASSWORD | docker login -u $REPOSITORY_USER $REPOSITORY_URL --password-stdin

# Tag the version in the packages and push into the repository
BUILD_VERSION=$(md5sum -b /tmp/rifei-frontend.tar | awk '{print $1}')
docker tag $REPOSITORY_URL/$REPOSITORY_ID/rifei-frontend:latest $REPOSITORY_URL/$REPOSITORY_ID/rifei-frontend:$BUILD_VERSION
docker push $REPOSITORY_URL/$REPOSITORY_ID/rifei-frontend:$BUILD_VERSION

docker-compose -f ./iac/docker-compose.yml push