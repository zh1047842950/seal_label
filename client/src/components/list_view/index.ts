import {State, Getter, Action, Mutation, namespace} from 'vuex-class'
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component({name: 'ListView', components: {}})
export default class ListView extends Vue {
    @State('listData', {namespace: 'common'}) listData: any
    @State('listUrl', {namespace: 'common'}) listUrl: any
    @State('listParams', {namespace: 'common'}) listParams: any
    @State('listKey', {namespace: 'common'}) listKey: any
    @State('page', {namespace: 'common'}) page: any
    @State('totalPage', {namespace: 'common'}) totalPage: any
    @State('refreshList', {namespace: 'common'}) refreshList: any
    @Action('getPaginationData', {namespace: 'common'}) getPaginationData: any
    @Action('changeCommonData', {namespace: 'common'}) changeCommonData: any
    // 初始化数据
    freshing = false
    loading = false
    scrollTop = 0

    // 计算属性 computed

    create() {

    }

    // 声明周期钩子
    async mounted() {
        const {changeCommonData, getListData} = this
        await changeCommonData({
            refreshList: false,
            page: 1,
            totalPage: 1,
            listData: []
        })
        await getListData()
    }

    async getListData() {
        this.loading = true
        uni.showLoading({title: '数据加载中'})
        const {getPaginationData, page, listParams, listUrl, listKey} = this
        await getPaginationData({
            url: listUrl, data: {page, ...listParams}, listKey
        })
        uni.hideLoading()
        this.loading = false
    }

    async onLoadMore() {
        const {changeCommonData, getListData, page, totalPage} = this
        if (page < totalPage) {
            await changeCommonData({
                page: page + 1
            })
            await getListData()
        } else {
            uni.showToast({
                title: '数据已加载完毕',
                icon: 'none'
            });
        }
    }

    async onScroll(e: any) {
        const {detail: {scrollTop}} = e
        this.scrollTop = scrollTop
    }

    async onRefresh(val: any) {
        const {changeCommonData, getListData, freshing} = this
        if (freshing) return
        this.freshing = true
        await changeCommonData({
            refreshList: false,
            page: 1,
            totalPage: 1,
            listData: []
        })
        await getListData()
        this.freshing = false
    }

    @Watch('refreshList')
    async onListFresh(val: boolean) {
        if (val) {
            const {changeCommonData, getListData} = this
            await changeCommonData({
                refreshList: false,
                page: 1,
                totalPage: 1,
                listData: []
            })
            await getListData()
        }
    }
}
