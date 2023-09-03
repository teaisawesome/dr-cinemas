<template>
    <div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Főcím</th>
                    <th scope="col">Megjelenés</th>
                    <th scope="col">Hossz (perc)</th>
                    <th scope="col">Korhatár</th>
                    <th scope="col">Leírás</th>
                    <th scope="col">Műveletek</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movie, index) in getMovies" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ movie.title }}</td>
                    <td>{{ formattedReleaseDate(movie.releaseDate) }}</td>
                    <td>{{ movie.duration }}</td>
                    <td>{{ movie.ageRating }}</td>
                    <td class="td-movie-description">
                        <div class="description-content">
                            {{ movie.description }}
                        </div>
                    </td>
                    <td>
                        <a href="/movies-maintenance/create"><button class="btn btn-warning edit-button"><font-awesome-icon :icon="'pen'"/></button></a>
                        <button class="btn btn-danger delete-button"><font-awesome-icon :icon="'trash'"/></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import formatDateToISO from '@/utils/customDateUtils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'MovieTable',
    components: {
        FontAwesomeIcon
    },
    methods: {
        ...mapMutations('movies', ['setMovies']),
        fetchMovies: async function() {
            try {
                const resMovies = await this.$axios.get('/movies')
                this.setMovies(resMovies.data)
            } catch (err) {
                console.log(err)
            }
        },
        formattedReleaseDate: function (releaseDate) {
            return formatDateToISO(releaseDate)
        }
    },
    computed: {
        ...mapGetters('movies', ['getMovies'])
    },
    created() {
        this.fetchMovies()
    }
}
</script>
<style scoped>
.td-movie-description {
    width: 25%;
}
.description-content {
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}
.edit-button {
    border-radius: 0.5rem;
    cursor: pointer;
    margin-right: 1rem;
}
.edit-button {
    border-radius: 0.5rem;
    cursor: pointer;
}
</style>