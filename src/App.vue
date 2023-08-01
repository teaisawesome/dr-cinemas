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
          <router-link class="nav-link" to="/login">Belépés</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

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
</style>
