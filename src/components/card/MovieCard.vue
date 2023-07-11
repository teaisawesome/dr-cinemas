<template>
    <div class="card">
        <div class="image-container">
            <img class="card-img-top" :src="`/movie-posters/${movie.imgSource}`" alt="movie poster image">
            <img class="age-rating-img" :src="`/age-ratings/${movie.ageRating}_copy.png`" alt="movie rating img">
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
    width: 19rem;
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
  height: 30%; /* Adjust the height percentage as desired */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(20, 27, 38, 1));
  pointer-events: none;
  z-index: 1;
}
.age-rating-img {
    width: 9rem;
    height: 3.5rem;
    position: absolute;
    bottom: 1rem;
    right: -1.9rem;
    z-index: 2;
    opacity: 1;
}
@media screen and (max-width: 600px) {
    .card {
        width: 12rem;
        margin: 0 auto;
    }
    .age-rating-img {
        width: 5rem;
        height: 2rem;
    }
}
</style>