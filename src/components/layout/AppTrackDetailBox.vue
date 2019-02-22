<template>
  <div class="box" v-if="track && track.album">
    <article class="media">
      <div class="media-left">
        <figure class="image">
          <img :src="track.album.images[0].url" :alt="track.name">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ track.name }} </strong> <small>{{ track.duration_ms | ms-to-mn }}</small> 
            <br />
            <strong>Release date: </strong> <small>{{ track.album.release_date }}</small>
          </p>
          <p>
            <strong>Artists:</strong>
          </p>
          <div class="tags">
            <span 
              class="tag is-warning" 
              v-for="(artist, index) in track.artists" 
              :key="index"
            >
              {{ artist.name }}
            </span>
          </div>
        </div>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">  
              <a class="button is-dark is-outlined" @click="selectedTrack">
                <span>Preview</span>
                <span class="icon">
                  <i class="fas fa-play"></i>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track-mixin.js';

export default {
  mixins: [
    trackMixin
  ],
  props: {
    track: Object
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin: 50px 0;

  .level {
    margin-top: 20px;
  }

  .image {
    max-width: 200px;
  }
}
</style>
