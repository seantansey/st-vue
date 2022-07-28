<template>
  <page back-button>
    <article class="blog-post">
        <h1>{{ title }}</h1>
        <img :src="cover">
        <p>Article sourced from dev.to via the dev.to API. View the original article @: <a :href="url" target="_blank">{{ url }}</a> </p>
        <div v-html="body"></div>
    </article>
  </page>
</template>

<script>
import Page from '@/components/shared/Page.vue'
import { getBlogPostBySlug } from '@/api/blog.js'
import { metaTitle } from '@/router'
import { trackPageView } from '../utils/google-analytics'

export default {
  name: 'BlogPost',
  components: {
    Page
  },
   props: {
      slug: String
  },
  data() {
    return {
      body: '',
      cover: '',
      title: '',
      url: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const article = await getBlogPostBySlug(id)
    if (article.error) {
      this.$router.push({ name: 'Page-Not-Found' })
      return
    }
    trackPageView(article.title, id)

    // set page title 
    document.title = metaTitle(article.title)
    this.body = article.body_html
    this.cover = article.cover_image
    this.title = article.title
    this.url = article.url
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .blog-post {

    h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $tertiary;
      padding-bottom: $padding-xs;
      margin-bottom: 20px;
    }

    p {
      color: $tertiary;
      margin: 0;
      font-size: $font-size-sm;
      margin-bottom: $margin-lg;

    }

    a {
      color: $secondary;
    }
  }
</style>
