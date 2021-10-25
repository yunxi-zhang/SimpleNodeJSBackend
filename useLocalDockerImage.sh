#!/bin/bash

docker rmi simplenodejsbackend:0.2
docker build -t simplenodejsbackend:0.2 .
docker run -dt -p 9000:9000 --name simplebackend simplenodejsbackend:0.2