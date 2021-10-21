#!/bin/bash

docker rmi simplenodejsbackend:0.1
docker build -t simplenodejsbackend:0.1 .
docker run -dt -p 3000:3000 --name simplebackend simplenodejsbackend:0.1