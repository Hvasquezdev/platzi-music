<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <app-notification 
            v-show="notification.error || notification.success" 
            @toggle="toggleNotification"
            :notification="notification"
          >
            <p slot="notification" v-show="notification.error">
              Music not found
            </p>
            <p slot="notification" v-show="notification.success">
              <strong>Results were found of:</strong> {{ searchQuery }}
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
  </main>
</template>

<script>
import PlatziMusicService from '@/services/platzi-music.js';

import AppTrack from '@/components/layout/AppTrack.vue';

import AppSpinner from '@/components/shared/AppSpinner.vue';
import AppNotification from '@/components/shared/AppNotification.vue';

export default {
  name: 'app',
  components: {
    AppTrack,
    AppSpinner,
    AppNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      notification: {
        error: false,
        success: false
      },
      selectedTrack: ''
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) return;

      this.isLoading = true;
      PlatziMusicService.searchTrack(this.searchQuery)
        .then(data => {
          this.notification.error = data.tracks.total === 0;
          this.notification.success = data.tracks.total !== 0;
          this.tracks = [...data.tracks.items];
          this.isLoading = false;
        })
        .catch(error => console.error(error));
    },
    setSelectedTrack (id) {
      this.selectedTrack = id;
    },
    toggleNotification () {
      this.notification.error = false;
      this.notification.success = false;
    }
  },
  computed: {
    searchMessage () {
      return this.tracks.length;
    }
  }
}
</script>