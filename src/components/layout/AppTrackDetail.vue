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
import { mapGetters, mapActions } from 'vuex';

import AppTrackDetailBox from '@/components/layout/AppTrackDetailBox.vue';
import AppSpinner from '@/components/shared/AppSpinner.vue';

export default {
  components: {
    AppTrackDetailBox,
    AppSpinner
  },
  computed: {
    ...mapGetters({
      track: 'getTrack',
      isLoading: 'getIsLoading'
    })
  },
  created () {
    const id = this.$route.params.id;

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id });
    }
  },
  methods: {
    ...mapActions([
      'getTrackById'
    ])
  }
}
</script>