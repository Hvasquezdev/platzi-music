<template>
  <div class="container">
    <transition name="move">
      <app-track-detail-box :track="track" />
    </transition>
    
    <transition name="move">
      <app-spinner v-show="isLoading" />
    </transition>
  </div>
</template>

<script>
import PlatziMusicService from '@/services/platzi-music.js';

import AppTrackDetailBox from '@/components/layout/AppTrackDetailBox.vue';
import AppSpinner from '@/components/shared/AppSpinner.vue';

export default {
  components: {
    AppTrackDetailBox,
    AppSpinner
  },
  data () {
    return {
      track: {},
      isLoading: false
    }
  },
  created () {
    const id = this.$route.params.id;
    this.isLoading = true;
    PlatziMusicService.getTrackById(id)
      .then(data => {
        this.track = data;
        this.isLoading = false;
      })
      .catch(error => console.error(error));
  }
}
</script>