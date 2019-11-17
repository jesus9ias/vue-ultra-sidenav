<template>
  <div
    class="sidenav__link"
    @click="clickLink"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SidenavOption',
  methods: {
    clickLink() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss">
</style>
