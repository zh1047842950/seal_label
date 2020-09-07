import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import uniPopup from '@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue'

@Component({name: 'BottomModal', components: {uniPopup}})
export default class BottomModal extends Vue {
    @Prop() private title?: string;
    @Prop() private onConfirm?: Function;
    @Prop() private onCancel?: Function;
    @State('showModal', {namespace: 'common'}) showModal: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any
    // 初始化数据
    timestamp = new Date().getTime()

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    // 声明周期钩子
    mounted() {
        //@ts-ignore
        // this.$refs.bottom_modal.open()
    }

    async confirm() {
        const {changeCommonData, $emit} = this
        await changeCommonData({showModal: false})
        try {
            $emit('onConfirm')
        } catch (e) {

        }
    }

    async cancel() {
        const {changeCommonData, $emit} = this
        await changeCommonData({showModal: false})
        try {
            $emit('onCancel')
        } catch (e) {

        }
    }

    async onChange(e: any) {
        const {show} = e
        const {changeCommonData,showModal} = this
        if(show===showModal) return
        await changeCommonData({showModal: show})
    }

    @Watch('showModal')
    watchValue(val: any) {
        const {$refs} = this
        if (val) {
            //@ts-ignore
            $refs.bottom_modal.open()
        } else {
            //@ts-ignore
            $refs.bottom_modal.close()
        }
    }
}
