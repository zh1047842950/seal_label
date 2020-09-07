import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {SealListPage} from '@/components'

@Component({name: 'Ranking', components: {SealListPage}})
export default class Ranking extends Vue {
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    // 声明周期钩子
    mounted() {

    }

    @Watch('watchValue')
    watchValue(val: any) {

    }


    onShow() {
        this.init()
    }

    // 方法
    async init() {
        const {changeCommonData, moduleFor} = this
        const obj = moduleFor === 'label' ? {
            listUrl: '/queryLabelStampList',
            listKey: 'stampLabelList',
        } : {
            listUrl: '/queryStampList',
            listKey: 'stampList',
        }
        await changeCommonData({
            listParams: {
                type: 1
            },
            ...obj,
            refreshList: true
        })
    }
}
