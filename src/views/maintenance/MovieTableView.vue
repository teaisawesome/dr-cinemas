<template>
  <div class="maintenance">
    <div class="new-movie-create-btn-container">
        <router-link class="btn btn-warning new-movie-create-btn" to="/movies-maintenance/create"><b>+</b> Új Film</router-link>
    </div>
    <MovieTable/>
  </div>
</template>
<script>
import MovieTable from '@/components/movie/maintenance/MovieTable.vue'

export default {
  name: 'MovieTableView',
  components: {
    MovieTable
  }
}
</script>
<style scoped>
.new-movie-create-btn-container {
  text-align: left;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}
.new-movie-create-btn {
  background-color: goldenrod;
  border: 1px solid black;
}
.new-movie-create-btn:hover {
  background-color: gold;
}

@media only screen and (max-width: 600px) {
  .new-movie-create-btn {
    width: 100%;
  }
}
</style>