<template>
  <page>
    <main class="about">
      <h1><span class="fwd-slash">/</span>About</h1>
      <about-introduction></about-introduction>
      <about-experience></about-experience>
      <about-skills></about-skills>
      <about-education></about-education>
    </main>
  </page>
</template>

<script>
  import AboutEducation from '@/components/AboutEducation'
  import AboutExperience from '@/components/AboutExperience'
  import AboutIntroduction from '@/components/AboutIntroduction'
  import AboutSkills from '@/components/AboutSkills'
  import Page from '@/components/shared/Page.vue'

  export default {
    name: 'About',
    components: {
      AboutEducation,
      AboutExperience,
      AboutIntroduction,
      AboutSkills,
      Page
    }
  }

</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
  .about {

     h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $border-color;
      padding-bottom: $padding-xs;

       .fwd-slash {
        color: $secondary;
        margin-right: $margin-xs;
      }
    }
  }

</style>

