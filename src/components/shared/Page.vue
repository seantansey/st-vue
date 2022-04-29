<template>
  <div class="page">
    <nav-bar></nav-bar>
    <div class="page-content">
      <slot></slot>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterBar from './FooterBar.vue'

export default {
  name: 'Page',
  components: {
      NavBar,
      FooterBar
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .page {
    .page-content {
      max-width: 1440px;
      margin: auto;
      padding: $padding-lg 200px;
  
      @media only screen and (max-width: $tablet-lg) {
          padding-left: 100px;
          padding-right: 100px;
      }

       @media only screen and (max-width: $tablet-sm) {
          padding-left: 50px;
          padding-right: 50px;
      }

      @media only screen and (max-width: $mobile) {
          padding-left: $padding;
          padding-right: $padding;
      }
    }
  }
</style>
