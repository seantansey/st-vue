<template>
  <div class="home" :class="{ 'route-selected': routeSelected }">
    <div class="router-links">
      <a v-for="link in links" :key="link" @click.prevent="route(link, $event)">
        {{ link }}
      </a>
    </div>
    <div class="pipe-wrapper">
      <div class="pipe-outlet">
        <div class="pipeline-3"></div>
        <div class="pipeline-4"></div>
        <div class="pipeline-5"></div>
      </div>
      <div class= "pipeline-2"></div>
      <div class="pipeline-1"></div>
    </div>
     <div class="logo-wrapper">
      <div class="logo-square">
        <div class="logo-text">ST</div>
        <div class="logo-text-shadow">ST</div>
      </div>
      <div class="logo-shadow"></div>
    </div>

     

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      links: ['about', 'blog', 'contact'],
      routeSelected: false
    }
  },
  methods: {
    route(link) {
      this.routeSelected = true
      setTimeout(() => this.$router.push(link), 800)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .home {
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo-wrapper {
      position: relative;
      margin-top: $margin-sm;

      .logo-square {
        height: 300px;
        width: 300px;
        border: 5px solid $green;
        border-radius: 20px;
        position: relative;
        box-shadow:
            inset 0 0 5px rgba($green, 5),
            0 0 5px rgba($green, 5),
            inset 0 0 10px rgba($green, 1),
            0 0 10px rgba($green, 1),  
            inset 0 0 50px rgba($green, 1),
            0 0 50px rgba($green, 1); 
        animation-name: flashingLogo;
        animation-iteration-count: 1;
        animation-duration: 3s;
        animation-timing-function: ease-in;
        z-index: 2;

        .logo-text {
          position: absolute;
          bottom: -30px;
          right: 20px;
          font-weight: bold;
          font-size: 150px;
          color: $green;
          text-shadow:
            0 0 5px rgba($green, 5),
            0 0 10px rgba($green, 1),
            0 0 50px rgba($green, 1); 
          animation-name: flashingLogo;
          animation-iteration-count: 1;
          animation-duration: 3s;
          animation-timing-function: ease-in;
          z-index: 2;
        }

        .logo-text-shadow {
          position: absolute;
          bottom: -34px;
          right: 24px;
          font-weight: bold;
          font-size: 150px;
          color: $black;
        }

      }

      .logo-shadow {
        height: 300px;
        width: 300px;
        border: 5px solid black;
        margin-bottom: $margin-xl;
        border-radius: 20px;
        position: absolute;
        top: 5px;
        right: 5px;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-duration: 3s;
        animation-timing-function: ease-in;
      }
    }

    .pipeline-1,
    .pipeline-3,
    .pipeline-4,
    .pipeline-5 {
      height: 40px;
      width: 5px;
      background: #1A1C26;
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-duration: 6s;
      animation-timing-function: ease-in;
      box-shadow: 
        0 0 5px rgba($green, 5),
        inset 0 0 5px rgba($green, 5);
      float: right;

    }

    .pipeline-2 {
      height: 5px;
      width: 220px;
      background: #1A1C26;
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-duration: 6s;
      animation-timing-function: ease-in;
      box-shadow: 
        0 0 5px rgba($green, 5),
        inset 0 0 5px rgba($green, 5),
    }

    .pipe-outlet {
      display: flex;
      width: 220px;
      justify-content: space-between;
    }

    

    .router-links {
      width: 260px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: $margin-sm;

      a {
        font-size: 16px;
        text-decoration: none;
        font-weight: bold;
        color: $grey;
        transition: color 1.5s, text-shadow 1.5s;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-duration: 6s;
        animation-timing-function: ease-in;
      }

      a:hover {
        cursor: pointer;
        color: $green;
        text-shadow:
          0 0 5px rgba($green, 5),
          0 0 10px rgba($green, 1),
          0 0 50px rgba($green, 1); 
      }
    }


      @keyframes flashingLogo {
        0% {
          opacity: 0;
          border-color: #2e6e56;
          color: #2e6e56;
        }
        50% {
          opacity: 0.2;
          border-color: #2e6e56;
          color: #2e6e56;
        }
        53% {
          opacity: 0.4;
        }
        56% {
          opacity: 1;
        }
        59% {
          opacity: 0.2;
        }
        62% {
          opacity: 0.4;
        }
        65% {
          opacity: 1;
        }
        71% {
          opacity: 0.2;
        }
        74% {
          opacity: 0.4;
        }
        100% {
          opacity: 1;
        }
      }



      @keyframes fadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
  }

  .home.route-selected {

    .router-links,
    .pipe-wrapper {
      opacity: 0;
      animation-name: fadeOutOpacity;
      animation-iteration-count: 1;
      animation-duration: 0.1s;
      animation-timing-function: ease-in;
    }

    .logo-square {
      opacity: 0;
      animation-name: fadeOutOpacity;
      animation-iteration-count: 1;
      animation-duration: 0.8s;
      animation-timing-function: ease-in;
    }

    .logo-shadow {
      display: none;
    }


     @keyframes fadeOutOpacity {
        0% {
          opacity: 1
        }
        100% {
          opacity: 0;
        }
      }
  }

  

</style>
