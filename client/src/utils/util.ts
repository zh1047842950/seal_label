import QRCode from 'qrcode'
import JsBarcode from 'jsbarcode'

export const joinObj = (obj: object, joinStr: string = '&') => {
    let s: string = ``
    Object.entries(obj).map(([k, v], i) => {
        let f = ['Array', 'Object'].includes(getDataType(v))
        s += (!!i ? `&` : ``) + k + `=` + encodeURIComponent(f ? JSON.stringify(v) : v)
    })
    return s
}

export const getDataType = (data: any) => Object.prototype.toString.call(data).replace('[object ', '').replace(']', '')

export const getParams = (params: any, contentType: number) => {
    Object.entries(params).map(([k, v]) => {
        if (v === 0 || !!v) return
        delete params[k]
    })
    let p: any = null
    switch (contentType) {
        case 1:
            p = JSON.stringify(params)
            break;
        case 2:

            break;
        default:
            p = joinObj(params)
            break
    }
    return p
}

export const getImgArr = (arr: any[]) => {
    const a: any[] = []
    arr.map(({url, imgCategory, height, width}: any) => {
        a.push({
            imgUrl: url, imgCategory, height, width
        })
    })
    return a
}

export const getVideoArr = (arr: any[]) => {
    const a: any[] = []
    arr.map(({url, coverImg}: any) => {
        a.push({
            shopVideo: url, coverImg
        })
    })
    return a
}

export const getQrCode = (data: string) => new Promise((resolve, reject) => {
    QRCode.toDataURL(data)
        .then(url => {
            resolve(url)
        })
        .catch(err => {
            reject(err)
        })
})

export const getBarCode = (data: string) => new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    JsBarcode(canvas, data);
    resolve(canvas.toDataURL("image/png"))
})


export const loadAllFonts = async () => {
    const fonts = [
        {
            "family": 'hahahuhei',
            src: 'http://resources.vson.com.cn/vson_font/hahahuhei.ttf'
        },
        {
            "family": 'huakangshaonv',
            src: 'http://resources.vson.com.cn/vson_font/huakangshaonv.ttf'
        },
        {
            "family": 'tengxiangaiqing',
            src: 'http://resources.vson.com.cn/vson_font/tengxiangaiqing.ttf'
        },
        {
            "family": 'yuweishufa',
            src: 'http://resources.vson.com.cn/vson_font/yuweishufa.ttf'
        },
        {
            "family": 'hujingli',
            src: 'http://resources.vson.com.cn/vson_font/hujingli.ttf'
        },
        {
            "family": 'shoujixiongtu',
            src: "http://resources.vson.com.cn/vson_font/shoujixiongtu.ttf"
        },
        {
            "family": 'yuweilishu',
            src: "http://resources.vson.com.cn/vson_font/yuweilishu.ttf"
        },
        {
            "family": "keaimengchong",
            src: "http://resources.vson.com.cn/vson_font/keaimengchong.ttf"
        }
    ]

    for (const {src, family} of fonts) {
        await uni.loadFontFace({
            family,
            source: 'url("' + src + '")',
            complete(res) {
                console.log('complete', res)
            }
        })
    }
}

export const base64toBlob = (base64: string) => {
    const arr = base64.split(',');
    //注意base64的最后面中括号和引号是不转译的
    const _arr = arr[1].substring(0, arr[1].length - 2);
    // @ts-ignore
    let mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(_arr),
        n: number = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

export const base64toFile = (base64: string, filename = 'test.png') => {
    const arr = base64.split(',');
    // @ts-ignore
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
}


export const imgFileUrl2Base64 = (url: string, format: string = 'image/png') => new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas'),
        ctx: any = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onload = function () {
        const {width, height} = img
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL(format);
        resolve(dataURL)
    };
})

export const h5Copy = (content: string, tip?: string) => {
    if (!document.queryCommandSupported('copy')) {
        // 不支持
        uni.showToast({
            icon: 'none',
            title: '当前系统不支持剪贴板复制命令'
        })
        return false
    }
    const textarea: any = document.createElement("textarea")
    textarea.value = content
    textarea.readOnly = "readOnly"
    document.body.appendChild(textarea)
    textarea.select() // 选择对象
    textarea.setSelectionRange(0, content.length) //核心
    const result = document.execCommand("copy") // 执行浏览器复制命令
    textarea.remove()
    if (tip) {
        uni.showToast({
            icon: 'success',
            title: tip
        })
    }
    return result
}

export const getScaleToPhysical = (size = 24) => {
    /*
     显示器对角线尺寸：23.75inch
     显示器分辨率：25601440, 60pHz
     当前逻辑分辨率：25601440
     width: calc(21cm * 1.2882498070656716);
     height: calc(29.7cm * 1.2882498070656716);
     */
    let browserDPI: any = null
    // @ts-ignore
    const {screen: {width, height, deviceXDPI, deviceYDPI}} = window
    if (deviceXDPI && deviceYDPI) {
        browserDPI = {
            x: deviceXDPI,
            y: deviceYDPI
        }
    } else {
        const tmpNode: any = document.createElement("DIV");
        tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
        document.body.appendChild(tmpNode);
        browserDPI = {
            x: parseInt(tmpNode.offsetWidth),
            y: parseInt(tmpNode.offsetHeight)
        }
        tmpNode.parentNode.removeChild(tmpNode);
    }
    const physicalDPI = Math.sqrt(width * width + height * height) / size
    return {
        w: physicalDPI / browserDPI.x,
        h: physicalDPI / browserDPI.y,
    };
}


export const loadedImage = (src: string) => new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve({image, src})
    image.onerror = reject
    image.src = src
})


export const timeout = (time: number=1000) => new Promise((resolve, reject) => {
    setTimeout(resolve, time)
})


export const getQueryVariable=()=> {
    const href = window.location.href
    const query = href.substring(href.indexOf('?')+1);
    const vars = query.split("&");
    const obj:any = {}
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        obj[pair[0]] = pair[1]
    }
    return obj;
}
