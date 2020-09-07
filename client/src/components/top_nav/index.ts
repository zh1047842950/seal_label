import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component({name: 'TopNav', components: {}})
export default class TopNav extends Vue {
    @Prop({type: String, default: 'conventional'}) private pathName: undefined;
    @State('moduleFor', {namespace: 'common'}) moduleFor: any
    //@Action('getBanners', {namespace: 'mall'}) getBanners: any
    // 初始化数据
    navs = [
        {
            label: '常规',
            key: 'conventional'
        },
        {
            label: '行业',
            key: 'industry'
        },
        {
            label: '排行',
            key: 'ranking'
        },
        {
            label: '我的',
            key: 'mine'
        }
    ]
    activeNav = 'conventional'

    // 计算属性 computed
    get users() {
        return []
    }

    create() {

    }

    // 声明周期钩子
    mounted() {

    }

    onNav(e: any) {
        const {key} = e
        const {moduleFor} = this
        let url = '/pages/' + key + '/index'
        if (key === 'conventional') {
            url = url + '?type=' + moduleFor
        }
        uni.navigateTo({
            url
        })
    }
}
