<template>
  <div class="page">
    <nav-bar></nav-bar>
    <slot></slot>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'page',
  components: {
      NavBar
  }
}
</script>
