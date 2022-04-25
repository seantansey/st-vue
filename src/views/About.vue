<template>
  <div class="about">
    <h1>About</h1>
    <about-introduction></about-introduction>
    <about-experience></about-experience>
    <about-skills></about-skills>

    <div class="flex-row">
      <ul>
        <li>Svelte</li>
        <li>SCSS / Sass</li>
        <li>Responsive design</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>Ruby on Rails</li>
        <li>RESTful APIs</li>
        <li>Unit testing (Jest)</li>
        <li>Agile development process</li>
        <li>Google Analytics</li>


      </ul>
    </div>
   
   
  </div>
</template>

<script>
  import AboutIntroduction from '@/components/AboutIntroduction.vue'
  import AboutExperience from '@/components/AboutExperience.vue'
  import AboutSkills from '@/components/AboutSkills.vue'


  export default {
    name: 'About',
    components: {
      AboutIntroduction,
      AboutExperience,
      AboutSkills
    }
  }


</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .about {
    padding: $padding 100px;

     @media only screen and (max-width: $tablet-lg) {
        padding-left: $padding-xl;
        padding-right: $padding-xl;
      }

      @media only screen and (max-width: $mobile) {
        padding-left: $padding;
        padding-right: $padding;
      }

     h1 {
        margin-bottom: $margin-sm;
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
