<template>
  <div class="maintenance">
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
</style>