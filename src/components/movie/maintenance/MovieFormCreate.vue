<template>
    <div class="col-md-6 movie-form">
        <form @submit.prevent="submitForm">
            <label class="form-label movie-form-label">Főcím</label><span class="error-msg">{{ errorMsg.title }}</span>
            <input v-model="title" class="form-control" type="text" placeholder="...">
            <label class="form-label movie-form-label">Műfajok</label><span class="error-msg">{{ errorMsg.genres }}</span>
            <select v-model="genres" class="form-control genre-multiselect" id="exampleFormControlSelect2">
                <option disabled selected>Select your option</option>
                <option class="movie-genre-option">Action</option>
                <option class="movie-genre-option">Thriller</option>
                <option class="movie-genre-option">Romantic</option>
            </select>
            <label class="form-label movie-form-label">Rendezők</label><span class="error-msg">{{ errorMsg.directors }}</span>
            <div class="input-group">
                <input v-model="director" class="form-control" type="text" placeholder="..."><button @click="addDirector" class="btn btn-warning">+</button>
            </div>
            <p @click="removeDirector(index)" class="input-sublist" v-for="(director, index) in directors" :key="index">{{ director }}</p>
            <label class="form-label movie-form-label">Színészek</label><span class="error-msg">{{ errorMsg.actors }}</span>
            <div class="input-group">
                <input v-model="actor" class="form-control" type="text" placeholder="..."><button @click="addActor" class="btn btn-warning">+</button>
            </div>
            <p @click="removeActor(index)" class="input-sublist" v-for="(actor, index) in actors" :key="index">{{ actor }}</p>
            <label class="form-label movie-form-label">Megjelenés</label><span class="error-msg">{{ errorMsg.releaseDate }}</span>
            <VueDatePicker v-model="selectedDate" format="yyyy-MM-dd" locale="hu" cancelText="Mégse" selectText="Kiválaszt"></VueDatePicker>
            <label class="form-label movie-form-label">Hossz (perc)</label><span class="error-msg">{{ errorMsg.movieLength }}</span>
            <input v-model="movieLength" class="form-control" type="number" placeholder="...">
            <label class="form-label movie-form-label">Korhatár</label><span class="error-msg">{{ errorMsg.age }}</span>
            <input v-model="age" class="form-control" type="number" placeholder="...">
            <label class="form-label movie-form-label">Leírás</label><span class="error-msg">{{ errorMsg.description }}</span>
            <textarea v-model="description" class="form-control" rows="3" placeholder="..."></textarea>
            <label class="form-label movie-form-label">Borítókép</label><span class="error-msg">{{ errorMsg.fileSelected }}</span>
            <input @change="onFileChanged" type="file" class="form-control">
            <button @click="newMovieSave" class="btn mt-3 movie-save-btn">MENTÉS</button>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import sortedArrayByObjProp from '@/utils/objectSorter'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { validationMixin } from '@/utils/mixins/formValidationMixin'

export default {
    name: 'MovieFormCreate',
    components: {
        VueDatePicker
    },
    mixins: [validationMixin],
    data() {
        return {
            title: '',
            director: '',
            directorList: [],
            actor: '',
            actorList: [],
            genres: [],
            selectedDate: new Date(),
            movieLength: 0,
            age: 0,
            description: '',
            fileSelected: false,
            errors: {}
        }
    },
    methods: {
        ...mapMutations('movies', ['setMovieGenres']),
        fetchMovieGenres: async function() {
            try {
                const resMovieGenres = await this.$axios.get('/movie-genres')
                this.setMovieGenres(resMovieGenres.data)
            } catch (err) {
                console.log(err)
            }
        },
        onFileChanged: async function(event) {
            this.fileSelected = true
            /* const formData = new FormData()
            formData.append('imageSource', event.target.files[0])
            await this.$axios.post('/movies-img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }) */
        },
        newMovieSave: async function() {
            this.errorMsg = this.validateForm()
        },
        addDirector: function() {
            if (this.director) {
                this.directors.push(this.director)
                this.director = ''
            }
        },
        removeDirector: function(index) {
            this.directors.splice(index, 1)
        },
        addActor: function() {
            if (this.actor) {
                this.actors.push(this.actor)
                this.actor = ''
            }
        },
        removeActor: function(index) {
            this.actors.splice(index, 1)
        }
    },
    computed: {
        ...mapGetters('movies', ['getMovieGenres']),
        getSortedMovieGenres() {
            const movieGenres = this.getMovieGenres
            console.log(movieGenres)
            return sortedArrayByObjProp(movieGenres, 'genreName')
        },
        errorMsg: {
            get() {
                return this.errors
            },
            set(newValue) {
                this.errors = newValue
            }
        },
        directors: {
            get() {
                return this.directorList
            },
            set(newValue) {
                this.directorList = newValue
            }
        },
        actors: {
            get() {
                return this.actorList
            },
            set(newValue) {
                this.actorList = newValue
            }
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
    margin-top: 0.5rem;
}
.movie-genre-option:checked {
    background-color: goldenrod;
}
.movie-genre-option:hover {
    background-color: #141B26;
    color: whitesmoke;
}
.movie-save-btn {
    width: 100%;
    height: 3rem;
    border-radius: 0.8rem;
    font-size: 1.5rem;
    background-color: goldenrod;
    color: #141B26;
    border-color: black;
}
.error-msg {
    color: red;
    margin-left: 1rem;
}
.input-sublist {
    color: goldenrod;
    margin-bottom: 0px;
    margin-left: 0.5rem;
}
.input-sublist:hover {
    cursor: pointer;
    color: red;
}
</style>