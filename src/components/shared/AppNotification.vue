<template>
  <div class="column is-12">
    <div class="notification" :class="{ 'is-danger': notification.error, 'is-success': notification.success }">
      <button class="delete" @click="toggleNotification"></button>
      <slot name="notification">
        Something is wrong
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notification: Object
  },
  methods: {
    toggleNotification () {
      this.$emit('toggle');
    }
  }
}
</script>
