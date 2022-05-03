<template>
  <section class="page-not-found">
    <h1>404</h1>
    <h2>Page not found</h2>
     <router-link to="/">
        <div class="website-logo-text">Return to home page</div>
    </router-link>
  </section>
</template>

<script>

export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .page-not-found {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

        h1 {
          margin: 0;
          font-size: 100px;
        }

        h2 {
          color: $secondary;
        }

        a {
          color: $primary;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
          text-decoration-color: $secondary;
        }
  }
</style>
