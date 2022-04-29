<template>
  <page>
    <div class="about">
      <about-introduction></about-introduction>
      <about-experience></about-experience>
      <about-skills></about-skills>
      <about-education></about-education>
    </div>
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

