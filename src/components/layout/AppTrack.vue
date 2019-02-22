<template>
  <div 
    class="card" 
    v-if="track && track.album"
    :class="{ 'cardDisabled': !track.preview_url }"
  >
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" :alt="track.name">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            {{ track.name }} <small>{{ track.duration_ms | ms-to-mn }}</small>
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a 
        class="card-footer-item has-text-success" 
        @click="goToTrack(track.id)" 
        :class="{ 'isDisabled': !track.preview_url }"
      >
        <strong>Details</strong>
        <span class="icon is-small">
          <i class="fas fa-info-circle"></i>
        </span>
      </a>
      <a 
        class="card-footer-item has-text-success" 
        @click="selectedTrack" 
        :class="{ 'isDisabled': !track.preview_url }"
      >
        <strong>Preview</strong>
        <span class="icon is-small">
          <i class="fas fa-play"></i>
        </span>
      </a>
    </footer>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track-mixin.js';

export default {
  mixins: [
    trackMixin
  ],
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToTrack (id) {
      if (!this.track.preview_url) return;
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  overflow: hidden;
  transition: all .3s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .media {
    .media-left {
      .image {
        border-radius: 4px;
        overflow: hidden;
      }
    }
  }

  .card-footer-item {
    cursor: pointer;

    &:hover {
      background-color: hsl(0, 0%, 96%);
    }

    .icon {
      margin-left: 5px;
    }
  }
}
</style>
