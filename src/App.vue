<template>
  <div id="app">
      <router-view />
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';

body {
  margin: 0;
}

#app {
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary;
  background: $bg;
}

.blog-post { // put this all in some overrides file

    pre {
      background: #000000;
      font-size: $font-size;
      border-radius: 3px;
      padding: $padding;
      color: #67e8f9;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    .highlight__panel-action {
      display: none;
    }
    
    .js-fullscreen-code-action {
      display: none;
    }
}

</style>
