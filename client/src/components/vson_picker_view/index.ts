import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component({name: 'VsonPickerView', components: {}})
export default class VsonPickerView extends Vue {
    @Prop() private options?: any[];
    @Prop() private value ?: number | string | number[] | string[];
    // @State('showModal', {namespace: 'common'}) showModal: any
    //@Action('getBanners', {namespace: 'mall'}) getBanners: any
    // 初始化数据

    // 计算属性 computed
    get users() {
        return []
    }

    async change(e: any) {
        this.$emit('onChange', e)
    }

    // 声明周期钩子
    mounted() {
    }


}
