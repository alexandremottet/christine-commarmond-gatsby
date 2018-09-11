#!/bin/sh

gatsby build >/dev/null 2>&1

docker build --no-cache -t aleanar/christine-commarmond-gatsby .

docker stop christine-commarmond-gatsby
docker rm christine-commarmond-gatsby
docker run --rm -p 9000:9000 --name christine-commarmond-gatsby -d aleanar/christine-commarmond-gatsby
