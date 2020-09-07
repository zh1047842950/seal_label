import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'
import {ListView, TopNav, EasyLoadImage} from '@/components'

@Component({name: 'SealListPage', components: {ListView, TopNav, EasyLoadImage}})
export default class SealListPage extends Vue {
    @Prop({type: String, default: 'conventional'}) private type: undefined;
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    //@Action('getBanners', {namespace: 'mall'}) getBanners: any
    // 初始化数据

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    // 声明周期钩子
    mounted() {

    }


}
