import state from './state'
imprt * as actions from './actions'
imprt * as getters from './getters'
imprt * as mutations from './mutations'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myCustomModule