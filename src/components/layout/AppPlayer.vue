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
      />
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      track: 'getTrack'
    })
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
