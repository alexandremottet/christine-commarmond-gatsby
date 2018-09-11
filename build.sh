#!/bin/sh

gatsby build >/dev/null 2>&1

docker build --no-cache -t aleanar/christine-commarmond-gatsby .

docker stop christine-commarmond-gatsby
docker rm christine-commarmond-gatsby
docker run --rm --expose=9000 -p 9000:9000 -e VIRTUAL_HOST=christinecommarmond.fr -e LETSENCRYPT_HOST=christinecommarmond.fr -e LETSENCRYPT_EMAIL=alexandremottet.dev@gmail.com --name christine-commarmond-gatsby -d aleanar/christine-commarmond-gatsby
