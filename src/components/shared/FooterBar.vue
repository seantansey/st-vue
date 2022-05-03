<template>
  <footer>
      <div class="footer-text">
        This site was built with Vue, Node.js and PostgreSQL. There's always money in the banana stand. Here dem socials..
      </div>
      <div class="social-wrapper">
         <router-link to="contact" class="send-message">  
          <font-awesome-icon icon="fa-solid fa-envelope" size="xl" />
        </router-link>
        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
        </a> 
        <a class="github" href="https://github.com/stansey92" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="xl" />
        </a>
        <a class="github" href="https://dev.to/stansey92" target="_blank">
          <font-awesome-icon icon="fa-brands fa-dev" size="xl" />
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
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    border-top: 1px solid $tertiary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .footer-text {
      margin: $margin $margin-lg 0 $margin;
    }

    .social-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: $margin 0;
    }

    a {
      color: $tertiary;
      margin: 0 $margin;
    }

    a:hover {
      color: $secondary;
    }
  }
</style>
