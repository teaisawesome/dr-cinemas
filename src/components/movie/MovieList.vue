<template>
    <div class="movie-list-container container">
        <div class="row">
            <div class="col-md-4" v-for="(movie, index) in movies" :key="index">
                <MovieCard :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MovieCard from '@/components/card/MovieCard.vue'

export default {
    name: 'MovieList',
    components: {
        MovieCard
    },
    methods: {
        ...mapMutations('movies', ['setMovies']),
        fetchMovies: async function () {
            try {
                const res = await this.$axios.get('/movies')
                this.setMovies(res.data)
            } catch (err) {
                console.log(err)
            }
        }
    },
    computed: {
        ...mapState('movies', {
            movies: state => state.movies
        })
    },
    created() {
        this.fetchMovies()
    }
}
</script>

<style scoped lang="scss">
</style>