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
    position: relative;
    min-height: 100vh;

    .page-content {
      max-width: 1440px;
      margin: auto;
      padding: 200px;
      padding-top: $padding-lg;
      min-height: 100%;
      animation-name: fadeIn;
      animation-iteration-count: 1;
      animation-duration: 0.5s;
      animation-timing-function: ease-in;
  
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

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
  }
</style>
