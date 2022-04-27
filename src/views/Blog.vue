<template>
  <page>
    <div class="blog">
      <h1>Blog</h1>
      <h3>
          As a bootcamp/self taught Software Engineer Ive often felt I lacked
          understanding of many computer science concepts. These simply weren't things I was taught when
          I learned how to code. I became a strong practical and pragmatic programmer, but often struggled 
          (and felt foolish) trying to articulate issues I was running into with more senior engineers on 
          projects. I've had to pick up and learn many new concepts along the way and below is a collection 
          of those lessons and gotchas.
      </h3>
    </div>
  </page>
</template>

<script>
import Page from '@/components/shared/Page.vue'

export default {
  name: 'Blog',
  components: {
    Page
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .blog {
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
  }

  h3 {
    color: $green;
  }
</style>
