import Vue from 'vue';
import Vuex from 'vuex';

import PlatziMusicService from '@/services/platzi-music.js';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
      track: {},
      tracks: [],
      isLoading: false
    },

    getters: {
      getTrack: (state) => state.track,
      getTracks: (state) => state.tracks,
      getIsLoading: (state) => state.isLoading
    },

    mutations: {
      setTrack (state, track) {
        state.track = track;
      },

      setTracks (state, tracks) {
        state.tracks = [...tracks.tracks.items];
      },

      toggleLoading (state, payload) {
        state.isLoading = payload.isLoading;
      }
    },

    actions: {
      getTrackById (context, payload) {
        context.commit('toggleLoading', { isLoading: true })
        PlatziMusicService.getTrackById(payload.id)
          .then(track => {
            context.commit('setTrack', track);
            context.commit('toggleLoading', { isLoading: false })
          })
          .catch(error => console.error(error));
      },

      searchTracks (context, payload) {
        context.commit('toggleLoading', { isLoading: true })
        PlatziMusicService.searchTrack(payload.query)
          .then(tracks => {
            context.commit('setTracks', tracks);
            context.commit('toggleLoading', { isLoading: false });
          })
          .catch(error => console.error(error));
      }
    }
  });
};

export default store;