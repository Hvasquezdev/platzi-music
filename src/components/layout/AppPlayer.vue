<template>
  <div class="content" v-if="track && track.album">
    <figure class="image is-128x128">
      <img 
        :src="track.album.images[0].url" 
        :alt="track.name"
      >
    </figure>
    <p>
      <strong>{{ track.name }} </strong> <small>{{ track.duration_ms | ms-to-mn}}</small>
      <br>
      <small>{{ track.artists[0].name }}</small>
    </p>
    <p>
      <audio 
        :src="track.preview_url" 
        controls
        autoplay
      />
    </p>
  </div>
</template>

<script>
import EventBus from '@/plugins/event-bus.js';

export default {
  data () {
    return {
      track: {}
    }
  },
  mounted () {
    EventBus.$on('set-track', (track) => {
      this.track = track;
    });
  },
  destroyed () {
    EventBus.$off('set-track');
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
