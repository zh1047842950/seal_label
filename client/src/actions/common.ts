import {commonApis} from '@/apis'
import {Crypto} from '@/utils'
import {getLocalFontFile} from "@/apis/common";

const pixels = require('image-pixels')

export const changeCommonData = async (context: any, payload: any) => {
    await context.commit('changeCommonData', payload)
}

export const accountRegister = async (context: any, payload: any) => {
    const res = await commonApis.accountRegister(payload)
    const {isOk} = res
    if (isOk) {
        // Message.SuccessTip('账号注册成功')
    }
    return res
}

export const accountLogin = async (context: any, payload: any) => {
    const {name} = payload
    const res = await commonApis.accountLogin(payload)
    const {isOk} = res

    if (isOk) {
        // Message.SuccessTip('账号登录成功')
    }
    return res
}

export const accountLogout = async (context: any, payload: any) => {
    const res = await commonApis.accountLogout()
    const {isOk} = res
    if (isOk) {
        // Message.SuccessTip('账号登出成功')
    }
    return res
}

export const getMobileVerifyCode = async (context: any, mobile: any) => {
    const res = await commonApis.getMobileVerifyCode({mobile, scene: 1001, language: 'zh', mode: 1})
    // Message.SuccessTip('获取验证码成功')
    return res
}

export const getPaginationData = async (context: any, payload: any) => {
    const {url, data, listKey} = payload
    const {totalPage = 1, [listKey]: list = [], ...others} = await commonApis.getPaginationData(url, data)
    await context.commit('changeCommonData', {totalPage: parseInt(totalPage)})
    await context.commit('getPaginationData', list)
    return {list, totalPage}
}

export const getQiniuToken = async (context: any) => {
    const {expireSeconds, token} = await commonApis.getQiniuToken()
    if (!token) return {}
    const qiniuToken = {
        token: Crypto.decryptByDes(token, 'header'),
        expireSeconds
    }
    localStorage.setItem('qiniuToken', JSON.stringify(qiniuToken))
    return qiniuToken
}

export const upload2Qiniu = async (context: any, file: any) => {
    const imgHost = 'https://imgqiniu.vson.com.cn/'
    const {userId = 'zsf_test'} = JSON.parse(localStorage.getItem('userInfo') || '{}')
    let qiniuToken = JSON.parse(localStorage.getItem('qiniuToken') || '{}')
    if (!qiniuToken.token) {
        qiniuToken = await getQiniuToken(context)
    }
    const {type} = file
    const data = {
        file,
        key: 'img/seal_label/' + userId + '/' + new Date().getTime() + '.' + type.split('/')[1],
        token: qiniuToken.token
    }
    const {key, hash, fsize} = await commonApis.upload2Qiniu(data)
    const result: any = {
        imgUrl: imgHost + key,
        hash, fsize
    }
    const {width, height} = await pixels(result.imgUrl)
    return Object.assign(result, {width, height})
}


export const getLocalFont = async (context: any, payload: any) => {
    const {index, ...data} = payload
    // const {blobUrl} = await commonApis.getLocalFontUrl(data)
    const {blobUrl} = await commonApis.getLocalFontFile(data)
    // @ts-ignore
    const [err, res] = await uni.loadFontFace({
        family: 'content_item_' + index, source: `url(${blobUrl})`
    })
    // console.log(`getLocalFont ,${index} ,${blobUrl}`, res)
    return {blobUrl, loadFontStatus: !err}
}
