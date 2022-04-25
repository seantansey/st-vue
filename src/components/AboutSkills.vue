<template>
  <div class="about-skills">
   <h2>Skills</h2>
    <h3>Front-end development</h3>
    <div class="logo-row">
      <font-awesome-icon icon="fa-brands fa-js-square" size="7x" class="js logo" />
      <font-awesome-icon icon="fa-brands fa-vuejs" size="7x" class="vue logo"/>
      <font-awesome-icon icon="fa-brands fa-react" size="7x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-html5" size="7x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-css3" size="7x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-sass" size="7x" class="logo"/>
    </div>
    <h3>Back-end development</h3>
    <div class="logo-row">
      <font-awesome-icon icon="fa-brands fa-node" size="7x" class="logo" />
      <font-awesome-icon icon="fa-brands fa-laravel" size="7x" class="logo"/>
      <font-awesome-icon icon="fa-brands fa-php" size="7x" class="logo"/>
    </div>
    <h3>Other</h3>






  </div>
</template>

<script>

export default {
  name: 'AboutSkills',
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    .about-skills {

        h2 {
            margin-top: $margin-xl;
        }

        h3 {
            color: $green;
            margin-bottom: 0;
        }

        .logo-row {
            .js {
                color: #f7df1e;
            }

            .vue {
                color: $green;
            }

            .logo {
                margin: $margin-sm;
            }


        }
    }
 
</style>
