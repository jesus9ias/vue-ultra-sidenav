<template>
  <div class="sidenav">
    <transition :name="transition">
      <aside
        v-if="isOpen"
        class="sidenav__bar"
      >
        <img
          width="48px"
          :src="usedCloseIcon"
          alt="Cerrar Sidenav"
          class="sidenav__toggle"
          @click="close"
        />
        <slot></slot>
      </aside>
    </transition>
    <div
      v-if="isOpen && backdrop"
      class="sidenav__backdrop"
      @click="close"
    >
    </div>
  </div>
</template>

<script>
import icon from './assets/menu_toggle.png';

export default {
  name: 'Sidenav',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'fade'
    },
    closeIcon: {
      type: String,
      default: null
    },
    backdrop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    usedCloseIcon() {
      return this.closeIcon || icon;
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
</style>
