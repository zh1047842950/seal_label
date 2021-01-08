const express = require('express')
const {createProxyMiddleware, Filter, Options, RequestHandler} = require('http-proxy-middleware')
var compression = require('compression')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const {delDir, getFontByParams} = require('../util/utils')

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', req.headers.origin)
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'tk,Content-Type,ost,apv,apt,authorization,x-requested-with,Content-Type')
//   res.header('Access-Control-Allow-Methods', '*')
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header('Content-Type', 'application/json;charset=utf-8')
//   next()
// })

app.use(express.static('../static'))
app.use(compression())

//设置post body数据的大小   limit
// create application/json parser
const jsonParser = bodyParser.json({limit: '100mb'})

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({limit: '100mb', extended: false})

app.get('/', (req, res) => {
  res.json({text: 'Hello ,get font file', ...req.query})
})
app.get('/seal_label/*', (req, res) => {
  res.sendFile('/index.html', {
    root: '../static/seal_label'
  })
})

app.post('/get_font_file', urlencodedParser, async function (req, res) {
  const fontOptions = {
    root: '../static/font_des',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  const {text, font} = req.body
  const {code, result} = await getFontByParams(font, text)
  if (code === 1) {
    res.sendFile(`/${result}/${font}.ttf`, fontOptions, () => {
      // delDir(`../static/font_des/${result}`)
      fs.unlink(`../static/font_des/${result}/${font}.ttf`, (err) => {
        if (err) throw err
        fs.rmdirSync(`../static/font_des/${result}`)
        console.log(`文件夹 ../static/font_des/${result} 已被删除`)
      })
    })
  }
})

app.use('/vc-*', createProxyMiddleware({
  'target': 'https://apis.myvsoncloud.com',
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/product_api': ''
  },
  router: {},
}))
app.use('/product_api', createProxyMiddleware({
  'target': 'https://apis.myvsoncloud.com',
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/product_api': ''
  },
  router: {},
}))
app.use('/develop_api', createProxyMiddleware({
  'target': 'https://ts.vson.com.cn:26082', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/develop_api': ''
  },
  router: {},
}))

app.use('/local_api', createProxyMiddleware({
  // 'target': 'http://19e2r25505.imwork.net',
  'target': 'http://127.0.0.1:9088',
  'pathRewrite': {
    '^/local_api': ''
  },
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  router: {},
}))

app.use('/passport_coocaa', createProxyMiddleware({
  'target': 'https://beta.passport.coocaa.com',
  'pathRewrite': {
    '^/passport_coocaa': ''
  },
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  router: {},
}))

app.use('/wx_coocaa', createProxyMiddleware({
  'target': 'http://beta-wx.coocaa.com',
  'pathRewrite': {
    '^/wx_coocaa': ''
  },
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  router: {},
}))

//设置允许跨域访问该服务.
const server = app.listen(9088, '0.0.0.0', () => {
  const host = server.address().address
  const port = server.address().port
  console.log('express实例，访问地址为 http://%s:%s', host, port)
})

