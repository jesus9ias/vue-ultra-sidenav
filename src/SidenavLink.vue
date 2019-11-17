<template>
  <a
    class="sidenav__link"
    :href="url"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'SidenavLink',
  props: {
    url: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
</style>
