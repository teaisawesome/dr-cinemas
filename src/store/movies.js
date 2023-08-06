const state = () => ({
    movies: []
})

const getters = {
    getMovies: (state) => {
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