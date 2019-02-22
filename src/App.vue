<template>
  <div id="app">
    <the-navbar />
    <app-hero />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import AppHero from '@/components/layout/AppHero.vue';

export default {
  name: 'app',
  components: {
    TheNavbar,
    AppHero,
    TheFooter,
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
@import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");

.cardDisabled {
  filter: blur(2px) !important;
  cursor: not-allowed !important;
}

.isDisabled {
  color: hsl(48, 100%, 67%)	!important;
  cursor: not-allowed !important;
  pointer-events: none !important;
  text-decoration: none !important;
}
</style>
