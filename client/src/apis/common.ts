import {Http} from "@/utils";

export const getPaginationData = async (url: string, data: any) => {
    return await Http.request(url, data)
}

export const getQiniuToken = async () => {
    return await Http.request('/qiniuUploadImgToken', {mod: 'com'})
}

export const upload2Qiniu = async (data: any) => {
    return await Http.upload(data)
}

export const getMobileVerifyCode = async (data: any) => {
    return await Http.request('/sendVerificationCodeByMobile', data)
}

export const accountRegister = async (data: any) => {
    return await Http.request('/register', {mod: 'mob', ...data})
}

export const accountLogin = async (data: any) => {
    return await Http.request('/login', {mod: 'mob', ...data})
}

export const accountLogout = async () => {
    return await Http.request('/logout', {mod: 'mob'})
}

export const getLocalFontUrl = async (data: any) => {
    const {fontUrl} = await Http.request('/get_font_file_json', data)
    return {
        blobUrl: fontUrl
    }
}

export const getLocalFontFile = async (data: any) => {
    return await Http.request('/get_font_file', {responseType: 'arraybuffer', server: 'local', ...data})
}

