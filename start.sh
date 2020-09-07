  #!bin/bash
  now=`date '+%Y-%m-%d %H:%M:%S'`
  echo "Hello get_font_file !"
  cd /workspace/get_font_file
  source /etc/profile
  npm -V
  npm run start
  echo "Update get_font_file success!"$now

