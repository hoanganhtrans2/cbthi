# cbthi
chmod 400 nodejs_thi.pem
ssh -i "nodejs_thi.pem" ubuntu@ec2-3-139-84-31.us-east-2.compute.amazonaws.com
sudo apt-get update
sudo apt-get upgrade
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/hoanganhtrans2/api-zalo-fake.git
ls
cd
npm install
npm start
