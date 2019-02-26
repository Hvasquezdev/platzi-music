<template>
  <div class="column is-12">
    <div class="notification" :class="{ 'is-danger has-text-danger': notification.error, 'is-success has-text-dark': notification.success }">
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

<style lang="scss" scoped>
.notification {
  background-color: transparent;
  border: 1px solid #4a4a4a;
  text-transform: uppercase;
}
</style>
