<template>
        <div class="home">
          <font-awesome-icon class="background-icon" icon="fa-solid fa-circle-nodes" />
          <div class="home-content">
            <div class="logo-square">
              <div class="logo-text">ST</div>
            </div>
            <h1 class="text-1">Development</h1>
            <p>Helping people turn their ideas into elegant and effective digital solutions.<br> Need a website or app? Not sure how to get started? Lets chat...</p>
            <div class="button-row">
                <router-link :to="{ name: 'about'}" class="learn-more">
                    Learn more
                </router-link>
                <router-link :to="{ name: 'contact'}" class="contact">
                    Contact
                </router-link>
            </div>
          </div>
        </div>
</template>

<script>
import Page from '@/components/shared/Page.vue'

export default {
  name: 'Home',
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    .home {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position:relative;
      overflow: hidden;

      .background-icon {
        position: absolute;
        top: 0;
        height: 100%;
        color: black;
        opacity: 0.2;
        animation-name: spin;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      .home-content {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 1200px;
        margin: auto;
        padding: 0 200px;

    
        @media only screen and (max-width: $tablet-lg) {
            padding-left: 100px;
            padding-right: 100px;
        }

        @media only screen and (max-width: $tablet-sm) {
            padding-left: 50px;
            padding-right: 50px;
        }

        @media only screen and (max-width: $mobile) {
           padding: 0;
        }

        .logo-square {
          height: 290px;
          width: 290px;
          border: 15px solid $secondary;
          position: relative;
          margin-bottom: $margin-lg;
  
          .logo-text {
            position: absolute;
            bottom: -22px;
            right: 16px;
            font-weight: $font-bold;
            font-size: 170px;
            color: $secondary;
          }
        }

        h1 {
          font-size: 70px;
          font-weight: $font-bold;
          margin: 0;

          @media only screen and (max-width: $tablet-sm) {
            font-size: 40px;
          }
        }

        .text-2 {
          color: $secondary;
        }

        p {
          text-align: center;
          color: $tertiary;
          margin: $margin 0;
          padding: 0 $padding-xl;
        }

        .button-row {
          display: flex;

          a {
            display: block;
            text-align: center;
            margin: $margin $margin-sm;
            font-size: $font-size;
            font-weight: $font-bold;
            border: none;
            padding: $padding-xs $padding;
            text-decoration: none;
          }

          a:hover {
            cursor: pointer;
          }

          .learn-more {
            border: 1px solid $secondary;
            color: $button-white;
            background: $secondary;
            transition: background 0.3s;
          }

          .learn-more:hover {
            background: $secondary-hover;
          }

          .contact {
            border: 1px solid $secondary;
            color: $secondary;
            background: transparent;
            transition: opacity 0.3s;
          }

          .contact:hover {
            opacity: .8;
          }
        }
      }  
  }
  @keyframes spin {
    0% { 
      transform: rotate(0deg)
    }
    100% { 
      transform: rotate(360deg)
    }
  }
</style>
