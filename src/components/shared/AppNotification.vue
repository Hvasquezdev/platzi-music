<template>
  <div class="column is-12">
    <div class="notification is-danger">
      <button class="delete" @click="toggleNotification"></button>
      <slot name="notification">
        Something is wrong
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNotification () {
      this.$emit('toggle');
    }
  }
}
</script>
