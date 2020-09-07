const fs = require('fs')
const Fontmin = require('fontmin')

const getFontByParams = (font = 'huakangshaonv', text = '华康少女字体') =>
  new Promise((resolve, reject) => {
    const output = `${font}_${new Date().getTime()}`
    const fontmin = new Fontmin()
      .src(`../static/fonts/${font}.ttf`)
      .use(Fontmin.glyph({
        text, hinting: false
      }))
      .dest('../static/font_des/' + output)
    fontmin.run(function (err, files) {
      if (err) {
        reject({code: 0, result: err})
        throw err
      }
      resolve({code: 1, result: output})
    })
  })

function delDir (path) {
  let files = []
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    for (let i = 0; i < files.length; i++) {
      let curPath = path + '/' + files[i]
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath) //递归删除文件夹
      } else {
        fs.unlinkSync(curPath) //删除文件
        console.log(`删除文件：${curPath}`)
        if (i === files.length - 1) {
          fs.rmdirSync(path)
        }
      }
    }
    // files.forEach((file, index) => {
    //   let curPath = path + '/' + file
    //   if (fs.statSync(curPath).isDirectory()) {
    //     delDir(curPath) //递归删除文件夹
    //   } else {
    //     fs.unlinkSync(curPath) //删除文件
    //     console.log(`删除文件：${curPath}`)
    //   }
    // })
    if (!files.length) {
      fs.rmdirSync(path)
    }
  }
}

module.exports = {
  delDir,
  getFontByParams
}

