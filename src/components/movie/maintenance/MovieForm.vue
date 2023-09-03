<template>
    <div class="col-md-6 movie-form">
        <form @submit.prevent="submitForm">
            <label class="form-label movie-form-label">Főcím</label>
            <input class="form-control" type="text" placeholder="...">
            <label class="form-label mt-3 movie-form-label">Műfajok</label>
            <select multiple class="form-control genre-multiselect" id="exampleFormControlSelect2">
                <option class="movie-genre-option" v-for="(movieGenre, index) in getSortedMovieGenres" :key="index" :value="index + 1">
                    {{ movieGenre.genreName }}
                </option>
            </select>
            <label class="form-label mt-3 movie-form-label">Megjelenés</label>
            <input class="form-control" type="date">
            <label class="form-label mt-3 movie-form-label">Hossz (perc)</label>
            <input class="form-control" type="number" placeholder="...">
            <label class="form-label mt-3 movie-form-label">Korhatár</label>
            <input class="form-control" type="number" placeholder="...">
            <label class="form-label mt-3 movie-form-label">Leírás</label>
            <textarea class="form-control" rows="3" placeholder="..."></textarea>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import sortedArrayByObjProp from '@/utils/objectSorter'

export default {
    name: 'MovieForm',
    methods: {
        ...mapMutations('movies', ['setMovieGenres']),
        submitForm: async function() {
            console.log('submit movieform')
        },
        fetchMovieGenres: async function() {
            try {
                const resMovieGenres = await this.$axios.get('/movie-genres')
                this.setMovieGenres(resMovieGenres.data)
            } catch (err) {
                console.log(err)
            }
        }
    },
    computed: {
        ...mapGetters('movies', ['getMovieGenres']),
        getSortedMovieGenres() {
            const movieGenres = this.getMovieGenres
            console.log(movieGenres)
            return sortedArrayByObjProp(movieGenres, 'genreName')
        }
    },
    created() {
        this.fetchMovieGenres()
    }
}
</script>
<style scoped>
.movie-form {
    margin: 0 auto;
    text-align: left;
}
.movie-form-label {
    color: goldenrod;
    text-transform: uppercase;
    padding-left: 0.5rem;
}
.movie-genre-option:checked {
    background-color: goldenrod;
}
.movie-genre-option:hover {
    background-color: #141B26;
    color: whitesmoke;
}
</style>