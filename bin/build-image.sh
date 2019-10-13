#!/bin/bash

REGISTRY=$HOSTNAME:5000

TAG=$(node bin/getCurrentVersion)
PACKAGE=$(node bin/getPackageName)

IMAGE=$REGISTRY/$PACKAGE:$TAG

docker image build --tag $IMAGE .
docker image push $IMAGE