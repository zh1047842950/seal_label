import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {AllowRight} from '@/components'

@Component({name: 'SealDetail', components: {AllowRight}})
export default class SealDetail extends Vue {
    //@Prop() private prop?: string;
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    @State('sealDetail', {namespace: 'label'}) sealDetail: any
    @Action('getSealDetail', {namespace: 'label'}) getSealDetail: any
    @Action('changeLabelData', {namespace: 'label'}) changeLabelData: any
    @Action('getLabelDetail', {namespace: 'label'}) getLabelDetail: any

    // 计算属性 computed
    id = ''

    create() {

    }

    // 声明周期钩子
    onLoad(options: any) {
        const {id} = options
        this.id = id
    }

    onShow() {
        this.init()
    }

    @Watch('watchValue')
    watchValue(val: any) {

    }

    // 方法
    async init() {
        const {getSealDetail, id, changeLabelData, moduleFor, getLabelDetail} = this
        const {name, ...props} = moduleFor == 'label' ? await getLabelDetail({id}) : await getSealDetail({id})
        await changeLabelData({
            sealDetail: {name, ...props}
        })
        uni.setNavigationBarTitle({title: name})
    }
}
