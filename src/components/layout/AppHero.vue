<template>
  <section class="hero is-success">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Platzi Music
        </h1>
        <h2 class="subtitle">
          Canciones que estan Vue-nisimas!
        </h2>
        <AppTrackPlayer />
      </div>
    </div>
  </section>
</template>

<script>
import AppTrackPlayer from '@/components/layout/AppPlayer.vue';

export default {
  components: {
    AppTrackPlayer
  }
}
</script>
