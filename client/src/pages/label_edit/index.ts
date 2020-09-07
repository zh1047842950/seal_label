import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {AllowRight, EasyLoadImage, ListView, BottomModal, VsonPickerView} from '@/components'
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'
import {Utils} from '@/utils'

// @ts-ignore
const {domtoimage, html2canvas, imageConversion} = window
@Component({
    name: 'LabelEdit', components: {
        uniPopup, AllowRight, EasyLoadImage, ListView, BottomModal, VsonPickerView
    }
})
export default class LabelEdit extends Vue {
    //@Prop() private prop?: string;
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    @State('labelFields', {namespace: 'label'}) labelFields: any
    @State('specialEffects', {namespace: 'label'}) specialEffects: any
    @State('alignTypes', {namespace: 'label'}) alignTypes: any
    @State('fontSizes', {namespace: 'label'}) fontSizes: any
    @State('paintSizes', {namespace: 'label'}) paintSizes: any
    @State('fonts', {namespace: 'label'}) fonts: any
    @State('oprMenus', {namespace: 'label'}) oprMenus: any
    @State('contentOprs', {namespace: 'label'}) contentOprs: any
    @State('contentTypes', {namespace: 'label'}) contentTypes: any
    @State('dimensions', {namespace: 'label'}) dimensions: any
    @State('textDirection', {namespace: 'label'}) textDirection: any
    @State('sealTypeList', {namespace: 'label'}) sealTypeList: any
    @State('contentItemOprs', {namespace: 'label'}) contentItemOprs: any
    @State('iconTypes', {namespace: 'label'}) iconTypes: any
    @Action('getSealType', {namespace: 'label'}) getSealType: any
    @Action('getSealDetail', {namespace: 'label'}) getSealDetail: any
    @Action('changeLabelData', {namespace: 'label'}) changeLabelData: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any
    @Action('getLocalFont', {namespace: 'common'}) getLocalFont: any
    @Action('upload2Qiniu', {namespace: 'common'}) upload2Qiniu: any
    @State('sealDetail', {namespace: 'label'}) sealDetail: any
    @Action('createDiySeal', {namespace: 'label'}) createDiySeal: any
    @Action('createDiyLabel', {namespace: 'label'}) createDiyLabel: any
    @Action('getSaveLabelDetail', {namespace: 'label'}) getSaveLabelDetail: any
    @Action('getLabelDetail', {namespace: 'label'}) getLabelDetail: any

    x = 0
    y = 0
    typeIndex = 0
    subTypeIndex = 0
    scrollTop = 0
    paintSizeIndex = [0, 0]
    contentItems: any = [
        // {
        //     "type": "icon",
        //     "src": "https://imgqiniu.vson.com.cn/img/lsc/seal/b3dc28407521d4b7406077c6bceb7d64_2020-05-09_UPlGG5wJ.png",
        //     "x": 0,
        //     "y": 4,
        //     "scale": 1.3,
        //     "rotate": 0
        // },
        // {
        //     "x": 39,
        //     "y": 19,
        //     "scale": 1.4,
        //     "rotate": 0,
        //     "type": "text",
        //     "text": "受之于天,既寿永昌",
        //     "fontClass": "font_size_12 huakangshaonv align_left font_bold",
        //     "alignType": 0,
        //     "font": 0,
        //     "fontSize": 2,
        //     "specialEffect": ["font_bold"],
        //     "blobUrl": "blob:http://192.168.1.247:9684/392aaf99-41b8-4a3f-9739-bfbc557cec29"
        // },
        // {
        //     "x": 180,
        //     "y": 13,
        //     "scale": 1,
        //     "rotate": 0,
        //     "type": "bar_code",
        //     "text": "1234567890",
        //     "src": "data:image/png;base64,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"
        // }
    ]

    paint: any = {
        W: 50,
        H: 30,
        width: 50,
        height: 30,
        scale: 1
    }
    sealParams: any = {
        server: 'pro'
    }
    diyLabel: any = {}
    editIndex = -1
    fontFields = {
        specialEffect: [],
        alignType: 0,
        fontSize: 6,
        font: 0,
        text: ''
    }
    contentType = 'text'
    imgUrl = ''
    contentItemOprIndex = -1
    orderId = '987654321'

    // 计算属性 computed
    get fontClass() {
        const {fontSizes, alignTypes, fonts, contentType, labelFields: {fontSize, font, alignType, specialEffect}} = this
        if (contentType !== 'text') return
        return `font_size_${fontSizes[fontSize]} ${fonts[font]['value']} ${alignTypes[alignType]['value']} ${specialEffect.join(' ')}`
    }

    get editInnerHtml() {
        const {labelFields: {text, specialEffect}} = this
        return specialEffect.includes('font_vertical') ? text.split('').join('<br/>') : text
    }

    renderInnerHtml(e: any) {
        const {text, specialEffect} = e
        return specialEffect.includes('font_vertical') ? text.split('').join('<br/>') : text
    }

    currentContentOprs(editIndex: number) {
        const {contentOprs, contentItems: {length}} = this
        const bool = editIndex === -1
        contentOprs[0].disabled = length > 10
        contentOprs[1].disabled = bool
        return contentOprs
    }

    async onPaintSizeChange(e: any) {
        const {detail: {value: [i1, i2]}} = e
        const {changeLabelData, paintSizes, paint, sealDetail} = this
        const W = paintSizes[0][i1], H = paintSizes[1][i2]
        paint.width = W
        paint.height = H
        paint.W = W
        paint.H = H
        sealDetail.size = W + '*' + H
        await changeLabelData({sealDetail})
        this.paintSizeIndex = [i1, i2]
    }

    async onSave(status: number) {
        this.editIndex = -1
        await Utils.timeout(100)
        const {moduleFor, contentItems, upload2Qiniu, createDiySeal, createDiyLabel, sealDetail, paint: {W, H, scale}, $refs} = this
        const fonts: any = []
        let cssText = ''
        contentItems.map((e: any, i: number) => {
            const {type, blobUrl} = e
            if (type === 'text' && !!blobUrl) {
                fonts.push({
                    family: 'content_item_' + i,
                    src: blobUrl
                })
                cssText += `@font-face { font-family: content_item_${i}; src: url("${blobUrl}");}`
            }
        })
        // @ts-ignore
        document.getElementById('content_item_fonts').innerHTML = cssText
        localStorage.setItem('fonts', JSON.stringify(fonts))
        uni.showLoading({title: '生成图片中...', mask: true})
        const node: any = document.getElementById('content');
        const {appVersion} = navigator
        let dataUrl: string = ''
        // if (appVersion.includes('iPhone')) {
        //     dataUrl = await domtoimage.toPng(node)
        // } else {
        const styles: any = window.getComputedStyle(node)
        const width = parseInt(styles.getPropertyValue('width'))
        const height = parseInt(styles.getPropertyValue('height'))
        const canvas: any = await html2canvas(node, {
            width: width * 3,
            height: height * 3,
            scale: 3,
            backgroundColor: null,
            useCORS: true,
            allowTaint: true,
            logging: true
        })

        // @ts-ignore
        const {image} = await Utils.loadedImage(canvas.toDataURL())
        canvas.width = width * 3
        canvas.height = height * 3
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, width * 3, height * 3)
        ctx.drawImage(image, 0, 0)
        dataUrl = canvas.toDataURL()
        this.imgUrl = dataUrl
        //@ts-ignore
        // document.getElementsByClassName('edit_area')[0].append(canvas)
        uni.hideLoading()

        if (moduleFor === 'label' && !status) {
            const ua = navigator.userAgent
            try {
                const params = {width: W, height: H, status, data: dataUrl.replace('data:image/png;base64,', '')}
                if (/android/i.test(ua)) {
                    // @ts-ignore
                    window.android.h5CallNative(JSON.stringify(params))
                }
                if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
                    // @ts-ignore
                    window.webkit.messageHandlers.h5CallNative.postMessage(params)
                }
            } catch (e) {
            }
            return
        }
        const {imgUrl, ...others} = await upload2Qiniu(Utils.base64toFile(dataUrl))
        if (moduleFor === 'label' && !!status) {
            const arr: any = []
            contentItems.map((e: any) => {
                const {type} = e
                const item: any = {...e}
                if (type === 'text') {
                    delete item.blobUrl
                }
                if (type === 'bar_code' || type === 'qr_code') {
                    delete item.src
                }
                arr.push(item)
            })
            const {id} = await createDiyLabel({
                status: 0,
                labelStampId: sealDetail.id,
                img: imgUrl,
                orderName: arr,
                successTip: '标签保存成功!'
            })
            return
        }
        const res = await createDiySeal({
            stampId: sealDetail.id, status,
            img: [{imgUrl, width, height, imgCategory: 1}]
        })
        if (!status) {
            this.orderId = res.id
            Utils.h5Copy(res.id)
            // @ts-ignore
            $refs.to_taobao_modal.open()
        } else {
            uni.showToast({icon: 'success', title: '印章图片已保存!'})
        }

    }

    gotoTB() {
        const {$refs, orderId} = this
        Utils.h5Copy(orderId)
        // @ts-ignore
        $refs.to_taobao_modal.close()
        uni.navigateTo({
            url: 'https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.VrrMU6V?sm=917be1'
        })
    }

    async onEditItem(e: any, i: number) {
        const {type} = e
        const {currentContentOprs, contentItems, changeLabelData, $refs} = this
        this.editIndex = i
        this.contentType = type
        await changeLabelData({
            contentOprs: currentContentOprs(i),
            labelFields: {
                ...contentItems[i]
            }
        })
        // @ts-ignore
        $refs.edit_content_item_modal.open()
    }

    async onContentOprItemTap(item: any) {
        const {key, disabled} = item
        if (disabled) return
        const {changeLabelData, changeCommonData, fontFields, editIndex = -1, contentItems, $refs} = this
        switch (key) {
            case 'add':
                // @ts-ignore
                $refs.add_content_item.open()
                await changeLabelData({labelFields: {...fontFields}})
                break;
            case 'chose_size':
                await changeCommonData({showModal: true})
                break;
            default:
                contentItems.splice(editIndex, 1)
                break
        }
    }

    onMove(e: any) {
        const {contentItems} = this
        const {detail: {x, y, source}, target: {dataset: {detail}}} = e
        if (!source) return
        Object.assign(contentItems[detail], {x, y})
        this.contentItems = contentItems
    }

    async onOpenItemModal(modal: string) {
        this.contentType = modal
        const {$refs, changeLabelData, fontFields} = this
        // @ts-ignore
        $refs.add_content_item.close()
        // @ts-ignore
        // $refs['add_' + modal].open()
        await changeLabelData({
            labelFields: {...fontFields}
        })
        // @ts-ignore
        $refs.edit_content_item_modal.open()

    }

    async onFontChange(e: any) {
        const {detail: {value}} = e
        const {editIndex, fonts, loadFont, labelFields: {text}} = this
        const {blobUrl} = await loadFont({text, font: fonts[value].value}, editIndex)
        this.labelFields.font = value
        this.labelFields.blobUrl = blobUrl
    }

    onFontSizeChange(e: any) {
        const {detail: {value}} = e
        this.labelFields.fontSize = value
    }

    onAlignTypeChange(e: any) {
        const {detail: {value}} = e
        this.labelFields.alignType = value
    }

    async onSpecialEffectChange(e: any) {
        const {detail: {value}} = e
        const {specialEffects, editIndex, renderTransform} = this
        // specialEffects.map((e: any, i: number) => {
        //     e.checked = value.includes(e.value)
        // })
        this.labelFields.specialEffect = value
        await renderTransform(editIndex)
        // this.specialEffects = specialEffects
    }

    async onChoseType(type: any, i: number) {
        this.typeIndex = i
        this.subTypeIndex = 0
        const {typeId} = type
        const {changeCommonData, sealParams} = this
        sealParams.sealType = [typeId]
        await changeCommonData({refreshList: true, listParams: sealParams})
    }

    async cancelChose() {
        this.editIndex = -1
        const {changeLabelData, currentContentOprs} = this
        await changeLabelData({
            contentOprs: currentContentOprs(-1),
        })
    }

    async init() {
        const {changeLabelData, paint, sealDetail: {size}, changeCommonData, fontFields, currentContentOprs, getContentItemsFont, sealParams, renderTransform} = this
        await changeLabelData({
            // iconTypes: sealTypeList[0].subclass,
            contentOprs: currentContentOprs(-1),
            labelFields: {...fontFields}
        })
        const [w, h] = size.split('*')
        paint.W = w
        paint.width = w
        paint.H = h
        paint.height = h
        // const sealTypeList = await getSealType({server: 'pro'})
        // const {typeId} = sealTypeList[0].subclass[0]
        sealParams.sealType = ['5eb52e6fe3590a0ab0e742a5']
        await getContentItemsFont()
        await changeCommonData({
            listParams: {...sealParams},
            listUrl: '/sealList',
            listKey: 'sealList'
        })

        await renderTransform()
    }

    async onChoseIcon(data: any) {
        const img = data.imgs[0].original //await Utils.imgFileUrl2Base64(data.imgs[0].original)
        const {contentItems, editIndex} = this
        const params = {
            type: 'icon',
            src: img,
            x: 0, y: 0,
            scale: 1, rotate: 0
        }
        if (editIndex === -1) {
            contentItems.push(params)
            this.editIndex = contentItems.length - 1
        } else {
            contentItems[editIndex].src = img
        }
    }

    async loadFont(data: any, index: number) {
        const {getLocalFont} = this
        const {blobUrl} = await getLocalFont({...data, index})
        return {blobUrl}
    }

    async onInputBlur(e: any) {
        const {detail: {value}} = e
        const {fonts, getLocalFont, contentType, editIndex, fontClass, contentItems, labelFields: {alignType, font, fontSize, specialEffect}} = this
        const contentItem: any = {
            x: 0, y: 0,
            scale: 1, rotate: 0,
            type: contentType,
            text: value
        }

        let obj: any = null
        switch (contentType) {
            case 'qr_code':
                obj = {src: await Utils.getQrCode(value)}
                break;
            case 'bar_code':
                obj = {src: await Utils.getBarCode(value)}
                break
            default:
                const fontType = fonts[font].value
                // const {fontUrl} = await getLocalFontUrl({font: fontType, text: value})
                const {blobUrl} = await getLocalFont({
                    font: fontType,
                    text: value,
                    index: editIndex === -1 ? contentItems.length : editIndex
                })
                this.labelFields.blobUrl = blobUrl
                obj = {fontClass, alignType, font, blobUrl, fontSize, specialEffect}
                break
        }
        Object.assign(contentItem, obj)
        if (editIndex === -1) {
            contentItems.push(contentItem)
            this.editIndex = contentItems.length - 1
        } else {
            contentItems[editIndex].text = value
            if (contentType !== 'text') {
                contentItems[editIndex].src = contentItem.src
            }
        }
        // @ts-ignore
        // $refs.edit_content_item_modal.close()
    }

    async onSaveContentItem() {
        const {$refs, labelFields, fontClass, editIndex, contentItems, contentType} = this
        if (contentType === 'text') {
            try {
                Object.assign(contentItems[editIndex], {...labelFields, fontClass})
            } catch (e) {

            }
        }
        // @ts-ignore
        $refs.edit_content_item_modal.close()
    }

    async onTouchStart(e: any) {
        console.log('onTouchStart')
        const {currentTarget: {dataset: {idx}}} = e
        this.contentItemOprIndex = parseInt(idx)
    }

    onTouchEnd(e: any) {
        console.log('onTouchEnd')
        this.contentItemOprIndex = -1
    }

    async onOprItem(e: any) {
        console.log('onOprItem', e)
        const {step, val2Key, key} = e
        const {contentItems, editIndex, labelFields, renderTransform} = this
        const {[val2Key]: value, ...props} = contentItems[editIndex]
        // @ts-ignore
        const val = parseInt(10 * value + step * 10) / 10
        contentItems[editIndex][val2Key] = val
        labelFields[val2Key] = val
        this.contentItems = contentItems
        if (val2Key === 'rotate') {
            await renderTransform(editIndex)
        }
    }

    async renderTransform(index?: number) {
        const {contentItems, $nextTick} = this
        // $nextTick(() => {
        //     // @ts-ignore
        //     const arr = isNaN(index) ? [...contentItems] : [contentItems[index]]
        //     arr.map((e: any, i: number) => {
        //         const {x, y, rotate, scale} = e
        //         // @ts-ignore
        //         const idx = isNaN(index) ? i : index
        //         console.log(`renderTransform,index= ${idx} ,rotate=${rotate}`)
        //         // @ts-ignore
        //         document.getElementById('movable_view_' + idx).style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale}) rotate(${rotate}deg)`
        //     })
        // })
    }

    onScalePaint(n: number) {
        const {paint: {scale, width, height, W, H}, sealDetail: {size}} = this
        this.paint.scale = !n ? 1 : Number((scale + n).toFixed(2))
        this.paint.width = !n ? W : Number((W * (scale + n)).toFixed(2))
        this.paint.height = !n ? H : Number((H * (scale + n)).toFixed(2))
    }

    async getContentItemsFont() {
        const {contentItems, fonts, getLocalFont, $set} = this
        contentItems.map(async (e: any, i: number) => {
            const {type, text, font} = e
            switch (type) {
                case 'text':
                    const {blobUrl} = await getLocalFont({text, font: fonts[font].value, index: i})
                    e.blobUrl = blobUrl
                    break;
                case 'qr_code':
                    e.src = await Utils.getQrCode(text)
                    break;
                case 'bar_code':
                    e.src = await Utils.getBarCode(text)
                    break;
                default:
                    break;
            }
            $set(contentItems, i, e)
        })
    }

    async onLoad(options: any) {
        const {id} = options
        const {getSaveLabelDetail, getLabelDetail, changeLabelData, getContentItemsFont} = this
        if (!!id) {
            const {orderName, labelStampId, ...res} = await getSaveLabelDetail({id})
            const labelModule = await getLabelDetail({id: labelStampId})
            await changeLabelData({sealDetail: labelModule})
            this.contentItems = JSON.parse(orderName)
            await getContentItemsFont()
            this.diyLabel = {labelStampId, ...res}
        }
    }

    async onShow() {
        const {init} = this
        await init()
    }

    onReady() {

    }
}

