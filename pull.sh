#!/usr/bin/expect -f
spawn git fetch origin Koying-dev

spawn git diff FETCH_HEAD
expect {
  eof {send_user "Allready up to date!!!\n";exit 0}
  "diff*"
}
spawn git pull
expect eof
 