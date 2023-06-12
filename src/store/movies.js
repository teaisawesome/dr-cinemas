const state = () => {
    movies: []
}

const getters = {
    movies: (state, getters) => {
        return state.movies
    }
}

const mutations = {
    setMovies(state, movies) {
        state.movies = movies
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}