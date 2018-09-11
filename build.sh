#!/bin/sh

gatsby build >/dev/null 2>&1

docker build -t aleanar/christine-commarmond-gatsby . >/dev/null 2>&1

docker stop christine-commarmond-gatsby >/dev/null 2>&1

docker run --rm -p 80:80 --name christine-commarmond-gatsby -d aleanar/christine-commarmond-gatsby
