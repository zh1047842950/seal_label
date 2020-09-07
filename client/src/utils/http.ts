import {Utils, Crypto} from '@/utils'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
    // baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
    // proxy: {
    //   host: 'https://ts.vson.com.cn',
    //   host: 'https://apis.myvsoncloud.com',
    //   port: 26082
    // }
}

let successTips = ''

const domains: any = {
    mob: '/vc-lscmas-ws-1.0.2/api/m',
    com: '/vc-css-ws-1.0.2/api/all',
    ccs: '/vc-ccs-web-1.0.2/api/all',
    lsc: '/vc-lsc-ws-1.0.2/api/all',
    cws: '/vc-ccs-ws-1.0.2/api/all'
}

const contentTypes = [
    "application/x-www-form-urlencoded",
    'application/json;charset=UTF-8',
    "multipart/form-data"
]

const commonHeaders: any = {
    ost: 2,
    apv: '1.0',
    apt: 107
}

const servers: any = {
    local: '/local_api',
    dev: '/develop_api',
    pro: '/product_api',
}


const getUserInfo = () => {
    const {userId, tk} = userInfo
    return !!userId && !!tk ? userInfo : JSON.parse(localStorage.getItem('userInfo') || '{}')
}

let userInfo: any = {}

const request = async (url: string, data: any = {}, config = {}) => {
    const {method = 'post', server = 'pro', mod = 'cws', successTip = '', contentType = 0, responseType = 'text', ...params} = data
    successTips = successTip
    if (!commonHeaders.tk) {
        userInfo = getUserInfo()
        const {cipherToken} = userInfo
        if (!!cipherToken) {
            commonHeaders.tk = cipherToken
        }
    }
    // @ts-ignore
    const [err, res] = await uni.request({
        // '/proxy_api'+
        // 开发环境
        url: servers[server] + (server === 'local' ? '' : domains[mod]) + url,
        // 正式环境
        // url: servers.pro + (server === 'local' ? '' : domains[mod]) + url,
        data: Utils.getParams(params, contentType),
        method,
        header: {
            "content-type": contentTypes[contentType],
            ...commonHeaders
        },
        responseType
    })
    if (err) {
        uni.showModal({
            content: err.errMsg,
            showCancel: false
        });
        return err
    } else {
        const {statusCode, data} = res
        if (responseType === 'text') {
            const {retCode, result = {}} = data
            const res = {
                ...result,
                isOk: retCode === '0' || statusCode === 200
            }
            if (res.isOk && !!successTip) {
                uni.showToast({title: successTip})
            }
            if (!res.isOk) {
                uni.showToast({title: result})
            }
            return res
        } else {
            return {
                blobUrl: window.URL.createObjectURL(new Blob([data]))
            }
        }
    }
}

const upload = async (datas: any = {}) => {
    const {file, ...formData} = datas
    // @ts-ignore
    const [err, {statusCode, data}] = await uni.uploadFile({
        url: 'https://up.qiniup.com',
        formData,
        file
    })
    return !err && statusCode === 200 ? JSON.parse(data) : err
}


export {
    request,
    upload
}


