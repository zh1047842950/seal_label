import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {SealListPage} from '@/components'
import {Utils, Crypto} from '@/utils'

@Component({name: 'Conventional', components: {SealListPage}})
export default class Conventional extends Vue {
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any
    @Action('getQiniuToken', {namespace: 'common'}) getQiniuToken: any
    // 初始化数据
    name = 'Home'

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    onLoad(option: any) {
        this.getQiniuToken()
    }

    @Watch('watchValue')
    watchValue(val: any) {

    }

    onShow() {
        this.init()
    }


    // 方法
    async init() {
        let {type = 'seal', userId, tk} = Utils.getQueryVariable()
        const {changeCommonData} = this
        const obj = type === 'label' ? {
            listUrl: '/queryLabelStampList',
            listKey: 'stampLabelList',
        } : {
            listUrl: '/queryStampList',
            listKey: 'stampList',
        }
        let userInfo: any = {
            "cipherToken": "0XWo2zvilM8J+2Fe27OzeFlaXd8uRlj76yvhM0KbsHxDD/63e1yMXQ==",
            "tk": "09abcacf06be40889018f5586a35c9dc",
            "cipherId": "6fRLy7AJ0cSiOOonYhfRhVlhN3VLbe0yxZd7xu6TfWbQUszIayoMnA==",
            "userId": "cabccb7cbd1d4e909f67248ef4419fc3"
        }
        if (!!tk && !!userId) {
            userId = decodeURIComponent(userId)
            tk = decodeURIComponent(tk)
            userInfo = {
                cipherId: userId,
                userId: Crypto.decryptByDes(userId, 'header'),
                cipherToken: tk,
                tk: Crypto.decryptByDes(tk, 'header')
            }
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        await changeCommonData({
            moduleFor: type,
            listParams: {
                type: 0
            },
            ...obj,
            refreshList: true
        })
    }
}
