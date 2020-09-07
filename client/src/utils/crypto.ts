import CryptoJS from 'crypto-js'
//偏移量
const vi = '01234567'
//秘钥key
const keys: any = {
    header: "*|rX<xO7<6B}7PA])?dN8fgX}wOr'HQh",
    pwd: "cjm'|I-pE2[8=TM4[1PXRu,_xiE}j0X>px2_MqOSU=%;/HK<lB"
}

const encryptByDes = (text: string, by = 'pwd') => {

    const encrypt = CryptoJS.TripleDES.encrypt(
        text, // 明文
        CryptoJS.enc.Utf8.parse(keys[by]), // //key不足24位自动以0(最小位数是0)补齐,如果多余24位,则截取前24位,后面多余则舍弃掉
        { //config
            iv: CryptoJS.enc.Utf8.parse(vi), //iv偏移量
            mode: CryptoJS.mode.CBC, //模式
            padding: CryptoJS.pad.Pkcs7 //padding处理
        })
    return encrypt.toString().replace(/\s+/g, "").trim() //加密完成后，转换成字符串
}

const decryptByDes = (ciphertext: string, by = 'pwd') => {
    // @ts-ignore
    const decrypted = CryptoJS.TripleDES.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(ciphertext.replace(/\s+/g, ''))
        },
        // ciphertext,
        CryptoJS.enc.Utf8.parse(keys[by]), {
            iv: CryptoJS.enc.Utf8.parse(vi),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    return decrypted.toString(CryptoJS.enc.Utf8)
}

const sha384 = CryptoJS.SHA384

// 123456 -->  Zp2+Yksjxl8=

export {
    encryptByDes,
    decryptByDes,
    sha384
}
