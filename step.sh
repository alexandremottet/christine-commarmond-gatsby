STEP

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