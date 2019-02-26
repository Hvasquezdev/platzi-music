<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <i class="fas fa-music"></i>
          Vue Music
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-brand {
  .navbar-item {
    i {
      margin-right: 5px;
    }
  }
}
</style>
