import {labelApis} from '@/apis'

export const changeLabelData = async (context: any, payload: any) => {
    await context.commit('changeLabelData', payload)
}

export const getSealType = async (context: any, payload: any) => {
    const {sealTypeList} = await labelApis.getSealType(payload)
    await context.commit('changeLabelData', {sealTypeList})
    return sealTypeList
}

export const getSealDetail = async (context: any, payload: any) => {
    return await labelApis.getSealDetail(payload)
}

export const getLabelDetail = async (context: any, payload: any) => {
    return await labelApis.getLabelDetail(payload)
}

export const createDiySeal = async (context: any, payload: any) => {
    return await labelApis.createDiySeal(payload)
}

export const createDiyLabel = async (context: any, payload: any) => {
    return await labelApis.createDiyLabel(payload)
}

export const getSaveLabelDetail = async (context: any, payload: any) => {
    return await labelApis.getSaveLabelDetail(payload)
}

export const deleteDiyLabel = async (context: any, payload: any) => {
    return await labelApis.deleteDiyLabel(payload)
}

export const deleteSealOrder = async (context: any, payload: any) => {
    return await labelApis.deleteSealOrder(payload)
}
