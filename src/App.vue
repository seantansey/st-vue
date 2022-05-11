<template>
  <div id="app" :class="{ 'no-scroll': mobileMenuOpen }">
      <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: mapState({
    mobileMenuOpen: state => state.ui.mobileMenuOpen
  })
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

body, #app {
  min-height: 100%;
  margin: 0;
  background: $bg;
  color: $primary;
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.no-scroll {
  height: 100vh;
  overflow: hidden;
}

button {
    font-family: Avenir;
}

.blog-post { // put this all in some overrides file

    pre {
      background: #000000;
      font-size: $font-size;
      padding: $padding;
      color: $secondary;
      overflow: auto;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    a {
      color: $secondary;
    }

    .highlight__panel-action {
      display: none;
    }
    
    .js-fullscreen-code-action {
      display: none;
    }
}

</style>
