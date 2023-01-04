#!/usr/bin/expect -f
spawn git fetch

spawn git diff HEAD
expect {
  eof {send_user "Allready up to date!!!\n";exit 0}
  "diff*"
}
spawn git pull
expect eof
