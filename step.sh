STEP

00 - apt-get install git

From
https://docs.docker.com/install/linux/docker-ce/debian/#set-up-the-repository

01 - Install packages to allow apt to use a repository over HTTPS:
sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg2 \
     software-properties-common
	
02 - Add Docker’s official GPG key:
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

03 - Use the following command to set up the stable repository. 
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
   
04 - update
sudo apt-get update

05 - install docker
sudo apt-get install docker-ce

06 - install docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose



docker build --no-cache -t aleanar/strapi .
docker network create strapi-network
docker run -e MONGO_INITDB_DATABASE=strapi -v `pwd` -p 27017:27017 --net=strapi-network --name mongo -d mongo
docker run -e DATABASE_HOST=mongo --net=strapi-network -p 1337:1337 -t --name strapi -d aleanar/strapi
docker run -e DATABASE_HOST=mongo -p 1337:1337 -d --net=strapi-network --name strapi -t aleanar/strapi
docker run -e DATABASE_HOST=mongo -p 1337:1337 -v strapi-app:/usr/src/api/strapi-app -d --net=strapi-network -t test/test