<template>
    <router-link class="blog-card" :to="{ name: 'Blog-Post', params: { id: slug }}">
        <font-awesome-icon icon="fa-brands fa-dev" size="4x" class="dev-icon"/>
        <div class="blog-content">
            <div class="blog-content-row">
                <h3>{{ title }}</h3>
                <p class="published">Published: {{ localDate }}</p>
            </div>
            <div class="blog-content-row">
                <div class="reactions">
                    <span class="blog-icon"><font-awesome-icon icon="fa-solid fa-heart" /> {{ reactions }}</span>
                    <span class="blog-icon"><font-awesome-icon icon="fa-solid fa-comment" /> {{ comments }}</span>
                    <span>{{ `${readTime} minute read` }}</span>
                </div>
                <p class="tags">{{ tags }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>

export default {
  name: 'BlogCard',
  props: {
      comments: Number,
      date: String,
      reactions: Number,
      readTime: Number,
      slug: String,
      tagList: {
          type: Array,
          default(rawProps) {
              return []
          }
      },
      title: String, 
  },
  computed: {
      tags() {
          return this.tagList.map((tag) => `#${tag}`).join(' ')
      },
      localDate() {
          return new Date(this.date).toDateString()
      }
  },
  methods: {
    selectArticle() {
        this.$emit('select-article', this.slug)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
    
    .blog-card {
        color: $primary;
        border-left: 3px solid $tertiary;
        padding: $padding;
        display: flex;
        align-items: center;
        text-decoration: none;
        margin: $margin 0;

        .blog-content {
            flex: 1;
        }
    
        h3 {
            margin: 0;
            margin-bottom: $margin-sm;
            font-size: $font-size-lg;
            align-items: center;
        }

        .dev-icon {
            color: $tertiary;
            margin-right: $margin;

             @media only screen and (max-width: $tablet-sm) {
                display: none;
            }
        }

        p {
            margin: 0;
            font-size: $font-size-sm;
        }

        .description {
            margin: $margin 0;
        }

        .blog-content-row {
            display: flex;
            justify-content: space-between;

             @media only screen and (max-width: $tablet-sm) {
                flex-direction: column;
            }

            .published {
                color: $tertiary;
                 
                @media only screen and (max-width: $tablet-sm) {
                    margin-bottom: $margin-sm;
                }

            }

            .reactions {
                display: inline-block;
                color: $tertiary;
                font-size: $font-size-sm;
                  
                @media only screen and (max-width: $tablet-sm) {
                    margin-bottom: $margin-sm;
                }

                 .blog-icon {
                    margin-right: $margin-sm;
                }
            }

            .tags {
                color: $secondary;
            }
        }
    }

    .blog-card:hover {
        border-color: $secondary;
        background: #161D2C85;
        cursor: pointer; 
    }
    
</style>
