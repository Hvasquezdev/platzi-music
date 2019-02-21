<template>
  <div id="app">
    <the-navbar />

    <app-hero />

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <app-notification v-show="showNotification" @toggle="toggleNotification">
            <p slot="notification">
              Music not found
            </p>
          </app-notification>

          <div class="column is-12">
            <nav class="level">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                  <form class="field has-addons" @submit.prevent="search">
                    <div class="control">
                      <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="Search your music"
                        v-model="searchQuery">
                    </div>
                    <div class="control">
                      <button class="button is-success" @click="search">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <!-- Right side -->
              <div class="level-right">
                <p class="level-item">Tracks encontrados:</p>
                <p class="level-item">
                  <span class="tag is-success" v-show="!isLoading">
                    {{ searchMessage }}
                  </span>
                  <span class="tag is-success" v-show="isLoading">
                    Searching...
                  </span>
                </p>
              </div>
            </nav>
          </div>

          <div 
            v-show="!isLoading"
            class="column is-3-widescreen is-4-tablet is-12-mobile" 
            v-for="(track, index) in tracks" 
            :key="index"
          >
            <app-track 
              :track="track" 
              @select="setSelectedTrack"
            />
          </div>

          <app-spinner v-show="isLoading" />
        </div>
      </div>
    </section>

    <the-footer />
  </div>
</template>

<script>
import PlatziMusicService from './services/platzi-music.js';

import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import AppHero from '@/components/layout/AppHero.vue';
import AppTrack from '@/components/layout/AppTrack.vue';

import AppSpinner from '@/components/shared/AppSpinner.vue';
import AppNotification from '@/components/shared/AppNotification.vue';

export default {
  name: 'app',
  components: {
    TheNavbar,
    AppHero,
    AppTrack,
    AppSpinner,
    TheFooter,
    AppNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return;

      this.isLoading = true;
      PlatziMusicService.searchTrack(this.searchQuery)
        .then(data => {
          this.showNotification = data.tracks.total === 0;
          this.tracks = [...data.tracks.items];
          this.isLoading = false;
        })
        .catch(error => console.error(error));
    },
    setSelectedTrack (id) {
      this.selectedTrack = id;
    },
    toggleNotification () {
      this.showNotification = !this.showNotification;
    }
  },
  computed: {
    searchMessage () {
      return this.tracks.length;
    }
  },
  watch: {
    showNotification () {
      if(this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 5000);
      }
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
</style>
