#### 安装教程

1.  系统环境：node，安装好后 
        node -v 即可查看nodejs是否安装成功
        npm -v，即可查看到npm的版本号
2.  控制台进入项目根目录，执行以下命令
    npm install pm2 -g
    npm i
    启动
        cd src && pm2 start index.js --name get_font_file
            启动后访问http://localhost:9088
            返回 Hello ,get font file即已启动
    重启
        pm2 restart get_font_file 
    日志查看
        pm2 logs get_font_file      
