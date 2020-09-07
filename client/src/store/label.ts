import {labelActions} from '@/actions'
import {labelMutations} from '@/mutations'
import {labelState} from '@/states'

export default {
    namespaced: true,
    state: labelState,
    mutations: labelMutations,
    actions: labelActions
}
