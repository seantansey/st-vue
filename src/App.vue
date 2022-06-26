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
@import '@/styles/overrides.scss';
</style>
