<template>
  <nav class="navbar navbar-expand-md bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DR Cinemas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Mozilap</router-link>
          <router-link class="nav-link" to="/about">Műsorok</router-link>
          <router-link v-if="!isLoggedIn" class="nav-link" to="/login">Belépés</router-link>
          <li v-if="isLoggedIn" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Karbantartás
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/">Műsorok</router-link>
              <router-link class="dropdown-item" to="/movies-maintenance">Filmek</router-link>
              <router-link class="dropdown-item" to="/">Termek</router-link>
              <router-link class="dropdown-item" to="/about">Dolgozók</router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <button class='nav-link' v-if="isLoggedIn" @click="staffLogout">Kilépés</button>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    staffLogout: function () {
      this.$store.dispatch('staffs/logout')
    }
  },
  computed: {
    ...mapGetters('staffs', ['isLoggedIn'])
  }
}
</script>
<style lang="scss">
body {
  background-color: #141B26;
}
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-link {
  color: goldenrod;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.nav-link:focus {
  color: goldenrod;
  text-decoration-line: underline;
  text-decoration-style: double;
  text-decoration-skip-ink: auto;
}
.nav-link:active {
  color: goldenrod;
  text-decoration-line: underline;
  text-decoration-style: double;
  text-decoration-skip-ink: auto;
}
.nav-link:hover {
  color: gold;
}
.dropdown-menu {
  background-color: goldenrod;
  border: 0.05rem solid black;
}
.dropdown-item {
  color: black;
  text-transform: uppercase;
}
.dropdown-item:hover {
  background-color: gold;
}
.dropdown-item:active {
  color: black;
}
nav .nav-link.show {
  color: goldenrod!important;
}

</style>
