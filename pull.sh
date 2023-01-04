#!/usr/bin/expect -f
spawn git checkout Koying-dev
spawn git pull
expect {
  "Already up to date." {send_user "Allready up to date!!!\n";exit 0}
}
spawn npm install
spawn npm start
 