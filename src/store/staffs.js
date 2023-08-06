const state = () => ({
    email: null,
    token: null
})
const mutations = {
    login(state, payload) {
        state.email = payload.email
        state.token = payload.token
    },
    logout(state) {
        state.email = null
        state.token = null
    }
}
const actions = {
    login({ commit }, payload) {
        commit('login', payload)
    },
    logout({ commit }) {
        commit('logout')
    }
}
const getters = {
    isLoggedIn(state) {
        return !!state.token
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}