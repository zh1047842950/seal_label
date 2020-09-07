import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {ListView, TopNav, AllowRight} from '@/components'
import {Utils} from '@/utils'
import uniSwipeAction from '@dcloudio/uni-ui/lib/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '@dcloudio/uni-ui/lib/uni-swipe-action-item/uni-swipe-action-item.vue'

const pixels = require('image-pixels')

@Component({name: 'Mine', components: {ListView, TopNav, AllowRight, uniSwipeAction, uniSwipeActionItem}})
export default class Mine extends Vue {
    //@Prop() private prop?: string;
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any
    @Action('deleteDiyLabel', {namespace: 'label'}) deleteDiyLabel: any
    @Action('deleteSealOrder', {namespace: 'label'}) deleteSealOrder: any
    @Action('createDiySeal', {namespace: 'label'}) createDiySeal: any
    // 初始化数据
    status = 0
    options = [
        {
            text: '取消',
            style: {
                backgroundColor: '#3C98FE'
            }
        }, {
            text: '删除',
            style: {
                backgroundColor: '#dd524d'
            }
        }
    ]

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    onShow() {
        this.init()
    }

    // 方法
    async init() {
        const {changeCommonData, status, moduleFor} = this
        const obj = moduleFor === 'label' ? {
            listUrl: '/queryLabelStampOrderList',
            listParams: {
                type: 1
            }
        } : {
            listUrl: '/queryStampOrderList',
            listParams: {
                type: status
            }
        }
        await changeCommonData({
            ...obj,
            listKey: 'orderList',
            refreshList: true
        })
    }

    onTapSeal(seal: any) {
        const {moduleFor, status, createDiySeal} = this
        const {id, img, stampId} = seal

        if (moduleFor === 'label') {
            uni.navigateTo({
                url: '/pages/label_edit/index?id=' + id
            })
            return
        }
        uni.showActionSheet({
            itemList: [status ? '淘宝下单' : '复制订单ID', '查看图片【长按保存】'],
            itemColor: '#3C98FE',
            success: async (item: any) => {
                const {tapIndex} = item
                switch (true) {
                    case tapIndex === 0 && status === 0:
                        Utils.h5Copy(id, '订单ID已复制到系统剪贴板!')
                        window.location.href = "https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.VrrMU6V?sm=917be1"
                        // uni.setClipboardData({
                        //     data: id,
                        //     success: function () {
                        //         uni.showToast({title: '订单ID已复制到系统剪贴板!', icon: "success"})
                        //     }
                        // });
                        break;
                    case tapIndex === 0 && status === 1:
                        const {data, width, height} = await pixels(img.original)
                        const res = await createDiySeal({
                            stampId, status: 0,
                            img: [{imgUrl: img.original, width, height, imgCategory: 1}]
                        })
                        uni.showModal({
                            title: '提示',
                            content: '印章图片已下单,马上复制订单ID前往淘宝旗舰店下单?',
                            success: ({confirm}) => {
                                if (confirm) {
                                    Utils.h5Copy(res.id)
                                    window.location.href = "https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.VrrMU6V?sm=917be1"
                                }
                            }
                        })
                        break;
                    default:


                    function downloadIamge(imgsrc: string, name: string) {//下载图片地址和图片名
                        let image = new Image();
                        // 解决跨域 Canvas 污染问题
                        image.setAttribute("crossOrigin", "anonymous");
                        image.onload = function () {
                            let canvas = document.createElement("canvas");
                            canvas.width = image.width;
                            canvas.height = image.height;
                            let context: any = canvas.getContext("2d");
                            context.drawImage(image, 0, 0, image.width, image.height);
                            let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                            let a = document.createElement("a"); // 生成一个a元素
                            let event = new MouseEvent("longtap"); // 创建一个单击事件
                            a.download = name || "photo"; // 设置图片名称
                            a.href = url; // 将生成的URL设置为a.href属性
                            a.dispatchEvent(event); // 触发a的单击事件
                        };
                        image.src = imgsrc;
                    }

                        // downloadIamge('https://imgqiniu.vson.com.cn/img/diy_seal_crm/XBJWvJTRkoZyZot/0BmLcOokNENU5MsJFtmil1eR85jWaLpwa41rrQ==/1593736575479.jpeg?imageView2/0/w/600/h/600/format/jpg/interlace/1/q/75'
                        //     , 'test.png');
                        uni.previewImage({
                            urls: [img.medium]
                        })
                        break
                }
            }
        })
    }

    // 方法
    async onChangeType(status: number) {
        this.status = status
        const {changeCommonData} = this
        await changeCommonData({
            listParams: {
                type: status
            },
            refreshList: true
        })
    }

    async onActions(e: any, data: any) {
        const {index} = e
        if (!index) return
        const {id} = data
        const {deleteDiyLabel, deleteSealOrder, changeCommonData, moduleFor} = this
        moduleFor === 'label' ? await deleteDiyLabel({id, successTip: '标签已删除!'}) : await deleteSealOrder({
            id,
            successTip: '印章订单已删除!'
        })
        await changeCommonData({refreshList: true})
    }
}
