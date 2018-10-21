STEP

00 - apt-get install -y git

From
https://docs.docker.com/install/linux/docker-ce/debian/#set-up-the-repository

01 - Install packages to allow apt to use a repository over HTTPS:
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common

02 - Add Docker’s official GPG key:
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

03 - Use the following command to set up the stable repository.
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

04 - update
sudo apt-get update

05 - install docker
sudo apt-get install -y docker-ce

06 - install docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

07 - npm
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs

08 - install letsencrypts
- https://backports.debian.org/Instructions/
- https://letsencrypt.org/getting-started/
- https://certbot.eff.org/lets-encrypt/debianstretch-nginx
- https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-16-04
  - sudo certbot certonly --standalone --preferred-challenges http -d christinecommarmond.fr

docker build --no-cache -t aleanar/christine-commarmond-strapi .
docker network create strapi-network
docker run -e MONGO_INITDB_DATABASE=strapi -v `pwd` -p 127.0.0.1:27017:27017 --net=strapi-network -v /opt/data:/data/db --name mongo -d mongo
docker run -v /opt/data:/data/db mongo
docker run -e MONGO_INITDB_DATABASE=strapi -v `pwd` -p 127.0.0.1:27017:27017 --net=strapi-network --name mongo -d mongo
docker run -e DATABASE_HOST=mongo -p 1337:1337 --net=strapi-network -t --name strapi -d aleanar/strapi
docker run -e DATABASE_HOST=mongo --net=strapi-network -p 1337:1337 -t --name strapi -d aleanar/christine-commarmond-strapi
docker run -e DATABASE_HOST=mongo -p 1337:1337 -v strapi-app:/usr/src/api/strapi-app -d --net=strapi-network -t test/test

docker build -t aleanar/christine-commarmond-gatsby .
docker run --rm -p 80:80 -d aleanar/christine-commarmond-gatsby

TIPS
docker run -e DATABASE_HOST=mongo -p 1337:1337 -d --net=strapi-network --name strapi -t aleanar/strapi
docker exec mongo-test bash -c 'mongorestore --drop /tmp/mongodump-2013-10-24/'
docker rmi $(docker images -f "dangling=true" -q)
