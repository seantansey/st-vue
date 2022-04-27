<template>
  <page>
    <div class="about">
      <h1>About</h1>
      <about-introduction></about-introduction>
      <about-experience></about-experience>
      <about-skills></about-skills>

      <div class="flex-row">
        <ul>
          <li>Responsive design</li>
          <li>RESTful APIs</li>
          <li>Unit testing (Jest)</li>
          <li>Agile development process</li>
          <li>Google Analytics</li>
        </ul>
      </div>
    </div>
  </page>
</template>

<script>
  import AboutIntroduction from '@/components/AboutIntroduction.vue'
  import AboutExperience from '@/components/AboutExperience.vue'
  import AboutSkills from '@/components/AboutSkills.vue'
  import Page from '@/components/shared/Page.vue'


  export default {
    name: 'About',
    components: {
      AboutIntroduction,
      AboutExperience,
      AboutSkills,
      Page
    }
  }


</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .about {
    padding: $padding-lg 100px;
  
     @media only screen and (max-width: $tablet-lg) {
        padding-left: $padding-xl;
        padding-right: $padding-xl;
      }

      @media only screen and (max-width: $mobile) {
        padding-left: $padding;
        padding-right: $padding;
      }

     h1 {
       font-size: 40px;
      }

      .flex-row {
        display: flex;
        flex-direction: row;

          @media only screen and (max-width: $tablet-sm) {
            flex-direction: column;
          }
      }
  }

 

</style>
