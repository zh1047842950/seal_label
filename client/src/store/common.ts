import {commonActions} from '@/actions'
import {commonMutations} from '@/mutations'
import {commonState} from '@/states'

export default {
  namespaced: true,
  state: commonState,
  mutations: commonMutations,
  actions: commonActions
}
