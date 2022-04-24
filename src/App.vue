<template>
  <div id="app">
    <NavBar/>
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/shared/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

body {
  margin: 0;
  background: #171923;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

.page {
  margin: 30px 100px;

  @media only screen and (max-width: $tablet-lg) {
    margin: $margin-lg $margin-xl;
  }

  @media only screen and (max-width: $tablet-sm) {
    margin: $margin-lg $margin;
  }

  @media only screen and (max-width: $mobile) {
    margin: $margin-lg $margin-sm;
  }
}

</style>
