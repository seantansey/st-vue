<template>
  <section class="about-introduction">
    <h1>About</h1>
    <div class="flex-row">
      <div class="about-content">
        <h3>I'm Sean Tansey. A Full-Stack Software Engineer specializing in Front-end Development based out of Denver, Colorado.</h3>
        <p>
          I enjoy building solutions for complex problems.
        </p>
        <p>
          While trained in full-stack development I've found myself drawn to building front-ends from the ground up in both web and mobile applications. 
        </p>
        <p>
          When I'm not coding you'll find me out snowboarding, fishing, playing guitar, or enjoying the numerous outdoor activities Colorado has to offer.
        </p>
      </div>
      <div class="about-image">
        <img class="profile-picture" src="@/assets/img/IMG_1171_2-removebg.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutIntroduction',
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .about-introduction {
    margin-bottom: $margin-xl;

    h1 {
       font-size: $font-size-header;
       border-bottom: 1px solid $border-color;
    }
    
    .flex-row {
      display: flex;
      flex-direction: row;

      @media only screen and (max-width: $tablet-sm) {
        flex-direction: column;
      }
    }

    .about-content {
      margin-right: $margin-lg;
      flex: 1;

        @media only screen and (max-width: $tablet-sm) {
          margin-right: 0;
          margin-bottom: $margin;
        }

        h3 {
          color: $secondary;
          margin: 0;
        }
    }

    .about-image {
      flex: 1;

      .profile-picture {
        width: 100%;
        background: $secondary;
      }
    }
  }
</style>
