<template>
  <div class="home">
    <div class="image-container">
      <img class="denver-image" src="@/assets/pieter-van-de-sande-r6BdUpN_iSk-unsplash.jpg">
      <div class="image-overlay"></div>
    </div>
    <div class="home-text">
      <h1>Sean Tansey</h1>
      <h2>Sofware Engineer</h2>
      <h3>
        <font-awesome-icon icon="fa-solid fa-location-dot" class="location-dot"/>
        Denver, Colorado
      </h3>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .home {
    flex: 1;
    display: flex;
    flex-direction: row;

    .image-container {
      position: relative;

      .denver-image {
        width: 100%;
      }

      .image-overlay {
        position: absolute;
        bottom: 0;
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.5); /* Black see-through */
        color: #f1f1f1;
        width: 100%;
        transition: .5s ease;
        opacity:0;
        color: white;
      }

    }

   

    .home-text {
      position: absolute;
      right: 5%;
      bottom: 20%;
      text-align: right;
    }

    h1 {
      font-size: 60px;
      margin: $margin-sm;
    }

    h2 {
      font-size: 50px;
      color: $green;
      margin: $margin-sm;
    }

    h3 {
      font-size: 30px;
      color: $grey;
      margin: $margin-sm;

      .location-dot {
        margin-right: $margin-xs;
      }
    }
  }

  

</style>
