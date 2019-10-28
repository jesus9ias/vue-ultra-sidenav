<template>
  <div
    class="sidenav__group"
  >
    <h2
      v-if="title"
      class="sidenav__title"
    >
      {{ title }}
    </h2>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'SidenavGroup',
  props: {
    title: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss">
</style>
