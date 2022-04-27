<template>
    <div class="about-introduction">
      <div class="about-content">
        <h3>I'm a Software Engineer specializing in Front-end development based out of Denver, Colorado.</h3>
        <p>
          I enjoy building solutions for complex front end UI problems.
          I'm of the belief that simple, explict, readable and maintable code is more important than minor performance improvements made by writing condensed "clever" code.
          While trained in full-stack development I've found myself drawn to working on UI's in both web and mobile applications. 
        </p>
        <p>
          When I'm not coding you'll find me out snowboarding, fishing, playing guitar, or enjoying the numerous outdoor activities Colorado has to offer.
        </p>
        <router-link to="contact" class="send-message">  
          <font-awesome-icon icon="fa-solid fa-envelope" size="lg"  class="social-icon"/>
          <span class="social-text">send me a message</span>
        </router-link>
        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="lg"  class="social-icon"/>
          <span class="social-text">linkedin.com/in/seantansey</span>
        </a> 
        <a class="github" href="https://github.com/stansey92">
          <font-awesome-icon icon="fa-brands fa-github" size="lg"  class="social-icon" />
          <span class="social-text">github.com/stansey92</span>
        </a>
      </div>
      <div class="about-image">
        <img class="profile-picture" src="@/assets/mountain-bike.png">
      </div>
    </div>

</template>

<script>
export default {
  name: 'AboutIntroduction',
 
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .about-introduction {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: $tablet-sm) {
      flex-direction: column;
    }

    .about-content {
      margin-right: $margin-lg;
      flex: 1;

        @media only screen and (max-width: $tablet-sm) {
          margin-right: 0;
          margin-bottom: $margin;
        }

        h3 {
          color: $green;
          margin: 0;
        }

        a {
          display: block;
        }

        a:hover {
          color: $green;
          text-decoration: underline;
        }

        .social-icon {
          margin-right: $margin-sm;
        }

        .social-text {
         font-size: 14px;
        }

        .send-message {
          color: $white;
          text-decoration: none;
        }

        .linkedin {
          color: #0a66c2;
          text-decoration: none;
        }

        .github {
          color: $grey;
          text-decoration: none;
        }
    }

    .about-image {
      flex: 1;

      .profile-picture {
        width: 100%;
      }
    }
  }
</style>
