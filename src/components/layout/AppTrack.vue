<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            {{ track.name }}
          </p>
          <p class="subtitle is-6">
            {{ track.artists[0].name }}
          </p>
        </div>
      </div>
    </div>
  <footer class="card-footer">
    <button class="card-footer-item has-text-success" @click="selectedTrack">
      <strong class="has-text-success">Play</strong>
      <span class="icon is-small">▶</span>
    </button>
  </footer>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectedTrack() {
      this.$emit('select', this.track.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition: all .3s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .card-footer-item {
    cursor: pointer;
  }
}
</style>
