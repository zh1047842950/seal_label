import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {SealListPage} from '@/components'
import {Utils} from "@/utils";

@Component({name: 'Industry', components: {SealListPage}})
export default class Industry extends Vue {
    //@Prop() private prop?: string;
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any
    // 初始化数据

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
        const {changeCommonData,moduleFor} = this
        const obj = moduleFor === 'label' ? {
            listUrl: '/queryLabelStampList',
            listKey: 'stampLabelList',
        } : {
            listUrl: '/queryStampList',
            listKey: 'stampList',
        }
        await changeCommonData({
            listParams: {
                type: 2
            },
            ...obj,
            refreshList: true
        })
    }
}
