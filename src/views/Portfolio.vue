<template>
  <page>
    <section class="portfolio">
      <h1>Portfolio</h1>
      <h3>Below is a collection of projects I have built or contributed to:</h3>
    
    </section>
</page>
</template>

<script>
import Page from '@/components/shared/Page.vue'

export default {
  name: 'Portfolio',
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .portfolio {

    h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $tertiary;
      padding-bottom: $padding-xs;
    }

    h3 {
      color: $secondary;
    }

  }

 
</style>
