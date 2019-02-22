import EventBus from '@/plugins/event-bus.js';

const trackMixin = {
  methods: {
    selectedTrack () {
      if (!this.track.preview_url) return;
      this.$emit('select', this.track.id);
      EventBus.$emit('set-track', this.track);
    }, 
  }
}

export default trackMixin;