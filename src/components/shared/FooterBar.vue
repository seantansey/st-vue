<template>
  <footer>
      <div>
        This site built with Vue.js and Node.js. There's always money in the banana stand. Here dem socials..
      </div>
      <div class="social-wrapper">
         <router-link to="contact" class="send-message">  
          <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
        </router-link>
        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
        </a> 
        <a class="github" href="https://github.com/stansey92">
          <font-awesome-icon icon="fa-brands fa-github" size="xl" />
        </a>
      </div>
  </footer>
</template>

<script>

export default {
  name: 'FooterBar',
  
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  footer {
    width: 100%;
    text-align: center;
    font-size: $font-size-sm;
    margin-top: 100px;
    padding: $padding-lg 0;
    border-top: 1px solid $tertiary;

    .social-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: $margin;
    }

    a {
      color: $secondary;
      margin: 0 $margin;
    }
  }
</style>
