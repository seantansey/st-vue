<template>
  <div class="about-skills">
   <h2>Skills</h2>
    <h3>Front-end development</h3>
    <div class="logo-row">
      <div class="icon">
        <i class="devicon-javascript-plain colored"></i>
        JavaScript
      </div>
      <div>
        <i class="devicon-vuejs-plain colored"></i>
        Vue
      </div>
      <div>
        <i class="devicon-svelte-plain colored"></i>
        Svelte
      </div>
      <div>
        <i class="devicon-react-original colored"></i>
        React
      </div>
      <div>
        <i class="devicon-html5-plain colored"></i>
        HTML
      </div>
      <div>
        <i class="devicon-css3-plain colored"></i>
        CSS
      </div>
      <div>
        <i class="devicon-sass-plain colored"></i>
        Sass
      </div>
      <div>
        <i class="devicon-tailwindcss-original-wordmark colored"></i>
        Tailwind
      </div>
    </div>
    <h3>Back-end development</h3>
    <div class="logo-row">
      <div>
        <i class="devicon-nodejs-plain colored"></i>
        Node.js
      </div>
      <div>
        <i class="devicon-laravel-plain colored"></i>
        Laravel
      </div>
       <div>
        <i class="devicon-php-plain colored"></i>
        Php
      </div>
       <div>
        <i class="devicon-rails-plain colored"></i>
        Ruby on Rails
      </div>
       <div>
        <i class="devicon-mysql-plain colored"></i>
        MySQL
      </div>
       <div>
        <i class="devicon-postgresql-plain colored"></i>
        PostgreSQL
      </div>
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
            margin: $margin 0 $margin-sm 0;
        }

        .logo-row {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          font-weight: bold;
          font-size: 14px;


          i {
            display: block;
            font-size: 80px;
            margin: $margin-sm;
          }

        }
    }
 
</style>
