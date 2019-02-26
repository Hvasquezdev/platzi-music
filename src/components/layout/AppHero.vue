<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Vue Music
        </h1>
        <h2 class="subtitle">
          Listen a preview of your favorite songs!
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

<style lang="scss" scoped>
section.hero {
  background-image: url('../../assets/hero-bg.jpg');
  background-position: center;
  background-size: cover;

  .title,
  .subtitle {
    text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
  }
}
</style>
