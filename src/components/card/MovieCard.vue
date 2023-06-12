<template>
    <div class="card" style="width: 18rem;">
        <div class="image-container">
            <img class="card-img-top" :src="`/img-movies/${movie.imgSource}`" alt="Card image cap">
        </div>
        <div class="card-body">
            <p class="card-text">{{ movie.title }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object
    }
}
</script>
<style>
.card-body {
    background-color: rgb(20, 27, 38);
    color: whitesmoke;
    font-size: 1.5rem;
}
.card {
    border: none;
}
.image-container {
  position: relative;
}
.image-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Adjust the height percentage as desired */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(20, 27, 38, 1));
  pointer-events: none;
}
</style>