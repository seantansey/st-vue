<template>
  <page>
    <section class="blog-feed">
      <h1>Blog</h1>
      <h3>
          As a bootcamp/self taught developer I've struggled with some of the deeper CS concepts.
          These simply weren't things I was taught when I learned how to code. 
          I became a strong practical programmer, but felt foolish when trying to articulate issues with some of the more senior dev's on my team. 
          I've learned many new concepts along the way and below is a collection of those lessons.
      </h3>
      <div v-if="posts.length" class="blog-post-list">
        <blog-card
          v-for="post in posts"
          :key="post.id"
          :comments="post.comments_count"
          :date="post.created_at"
          :reactions="post.positive_reactions_count"
          :read-time="post.reading_time_minutes"
          :slug="post.slug"
          :tag-list="post.tag_list"
          :title="post.title"
          :url="post.url"
        ></blog-card>
      </div>
      <div v-else class="no-blog-posts">
        Whoops, nothing to see here.... try a different filter?
      </div>
    </section>
</page>
</template>

<script>
import BlogCard from '@/components/BlogCard'
import Page from '@/components/shared/Page.vue'
import { getAllBlogPosts } from '@/api/blog.js'

export default {
  name: 'BlogFeed',
  components: {
    BlogCard,
    Page
  },
  data() {
    return {
      posts: [],
      slug: '',
    }
  },
  async mounted() {
    const posts = await getAllBlogPosts()
    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .blog-feed {

    h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $tertiary;
    }

    h3 {
      color: $secondary;
    }

    .no-blog-posts {
      padding: $padding-xl 0;
      text-align: center;
    }
  }

 
</style>
