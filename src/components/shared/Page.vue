<template>
  <div class="page">
    <nav-bar></nav-bar>
    <div class="page-content-container">
      <img class="background-image" src="@/assets/img/circle-nodes-solid.svg">
      <div class="page-content">
        <a v-if="backButton" class="back-button" @click="$router.back()">
          <font-awesome-icon icon="fa-solid fa-chevron-left" size="sm"/>
          Back
        </a>
        <slot></slot>
      </div>
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
  },
  props: {
    backButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;

    .page-content-container {
      position: relative;
      overflow: hidden;
      flex: 1;

      .background-image {
        position: absolute;
        height: 1600px;
        top: 64px;
        left: 50%;
        transform: translateX(-50%);
      }

      .page-content {
        position: relative;
        max-width: 1000px;
        margin: auto;
        padding: 100px;
        padding-top: $padding-xl;
        min-height: 100%;

        @media only screen and (max-width: $tablet-sm) {
            padding-left: 50px;
            padding-right: 50px;
        }

        @media only screen and (max-width: $mobile) {
            padding-left: $padding;
            padding-right: $padding;
        }

        .back-button {
          position: absolute;
          top: 40px;
          left: 100px;
          color: $secondary;
          text-decoration: none;
          font-weight: $font-semibold;

          @media only screen and (max-width: $tablet-sm) {
            left: 50px;
          }

          @media only screen and (max-width: $mobile) {
            left: 20px
          }
        }

        .back-button:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
