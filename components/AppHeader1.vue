<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg shadow navbar-dark bg-primary">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/"> TweeterClone App </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-tabs">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Login </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.logo-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
