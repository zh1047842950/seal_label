import {Http} from "@/utils";

export const getSealType = async (data: any) => {
    return await Http.request('/sealTypeList', data)
}

export const getSealDetail = async (data: any) => {
    return await Http.request('/queryStampDetail', data)
}

export const getLabelDetail = async (data: any) => {
    return await Http.request('/queryLabelStampDetail', data)
}

export const createDiySeal = async (data: any) => {
    return await Http.request('/addStampOrder', data)
}

export const createDiyLabel = async (data: any) => {
    return await Http.request('/addLabelStampOrder', data)
}

export const getSaveLabelDetail = async (data: any) => {
    return await Http.request('/queryLabelStampOrderDetail', data)
}

export const deleteDiyLabel = async (data: any) => {
    return await Http.request('/deleteLabelStampOrder', data)
}

export const deleteSealOrder = async (data: any) => {
    return await Http.request('/deleteStampOrder', data)
}
