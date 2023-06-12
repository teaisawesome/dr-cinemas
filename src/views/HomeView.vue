<template>
  <div class="home">
    <MovieList/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/movie/MovieList.vue'

export default {
  name: 'HomeView',
  components: {
    MovieList
  }
}
</script>
