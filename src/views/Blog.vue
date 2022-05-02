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
      <section>
        <blog-post
          v-for="post in posts"
          :key="post.id"
          :comments="post.comments_count"
          :date="post.created_at"
          :reactions="post.positive_reactions_count"
          :read-time="post.reading_time_minutes"
          :tag-list="post.tag_list"
          :title="post.title"
          :url="post.url"
        ></blog-post>
      </section>
      <section>
        <div v-if="post" v-html="post">

        </div>
      </section>
    </div>
  </page>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'
import Page from '@/components/shared/Page.vue'
import { getAllBlogPosts, getBlogPostBySlug } from '@/api/blog.js'

export default {
  name: 'Blog',
  components: {
    BlogPost,
    Page
  },
  data() {
    return {
      posts: [],
      post: null
    }
  },
  async mounted() {
    const posts = await getAllBlogPosts()
    console.log(posts)
    this.posts = posts
    const post = await getBlogPostBySlug("javascript-the-event-loop-28i6")
    console.log(post)
    this.post = post.body_html
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .blog {

    h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $tertiary;
      margin-bottom: 50px;
    }

    h3 {
      color: $secondary;
    }
  }

 
</style>
