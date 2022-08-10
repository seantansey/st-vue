<template>
    <div class="blog-card">
        <div class="image-container">
            <router-link :to="{ name: 'Blog-Post', params: { id: slug }}" class="router-link">
                <img :src="img">
            </router-link>
        </div>
        <div class="blog-content">
            <p class="tags">{{ tags }}</p>
            <router-link :to="{ name: 'Blog-Post', params: { id: slug }}" class="router-link">
                <h2>{{ title }}</h2>
            </router-link>
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'BlogCard',
  props: {
      description: String,
      img: String,
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
        display: flex;
        margin: $margin-xl 0;

         @media only screen and (max-width: $tablet-lg) {
            flex-direction: column;
        }

        .image-container {
            flex: 1;

            img {
                width: 100%;
            }
        }

        .blog-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: $margin-lg;

            @media only screen and (max-width: $tablet-lg) {
                margin-left: 0;
                margin-top: $margin-sm;
            }
            .router-link {
                text-decoration: none;
                color: $primary;

                h2 {
                    margin: $margin-xs 0 $margin 0;
                    align-items: center;
                    font-size: $font-size-xl;

                    @media only screen and (max-width: $tablet-lg) {
                        margin-bottom: 0;
                    }

                    &:hover {
                        color: $secondary;
                    }
                }
            }
            .description {
                color: $quaternary;
                margin: 0;

                @media only screen and (max-width: $tablet-lg) {
                    display: none;
                }
            }
            .tags {
                font-size: $font-size-sm;
                font-weight: $font-semibold;
                color: $secondary;
                margin: 0;
            }
        }
    }
</style>
