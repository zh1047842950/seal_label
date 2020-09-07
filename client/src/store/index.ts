import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)
import commonStore from './common'
import labelStore from './label'

export default new Vuex.Store({
    plugins: [persistedState()], // vuex 数据持久化
    state: {},
    mutations: {},
    actions: {},
    modules: {
        common: commonStore,
        label: labelStore
    }
})
