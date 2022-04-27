<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#app {
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
  background: $black;
  min-height: 100vh;
}
</style>
