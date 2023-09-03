const state = () => ({
    movies: [],
    movieGenres: []
})

const getters = {
    getMovies: (state) => {
        return state.movies
    },
    getMovieGenres: (state) => {
        return state.movieGenres
    }
}

const mutations = {
    setMovies(state, movies) {
        state.movies = movies
    },
    setMovieGenres(state, movieGenres) {
        state.movieGenres = movieGenres
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}