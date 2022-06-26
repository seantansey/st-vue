<template>
    <header>
        <nav>
            <div class="navbar" :class="{ 'navbar-shadow': pageScrolled }">
                <div class="website-logo-wrapper">
                    <router-link to="/" class="website-logo">
                        <div class="website-logo-text">ST</div>
                    </router-link>
                </div>
                <div class="links">
                    <router-link v-for="link in links" :to="{ name: link }" :key="link" class="router-link">
                        {{ link }}
                    </router-link>
                </div>
                <button class="menu-button" @click="toggleMobileMenu">
                    <font-awesome-icon v-if="mobileMenuOpen" icon="fa-solid fa-xmark" size="xl"/>
                    <font-awesome-icon v-else icon="fa-solid fa-bars" size="xl"/>
                </button>
            </div>  
            <div v-if="mobileMenuOpen" class="navbar-extended">
                <div class="menu-content">
                    <router-link v-for="link in links" :to="{ name: link }" :key="link"  @click.native="toggleMobileMenu" class="router-link">
                        {{ link }}
                    </router-link>
                    <div class="social-links">
                        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
                        </a> 
                        <a class="github" href="https://github.com/seantansey" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-github" size="xl" />
                        </a>
                        <a class="github" href="https://dev.to/stansey92" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-dev" size="xl" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  data() {
      return {
          links: ['about', 'blog', 'portfolio', 'contact'],
          pageScrolled: false
      }
  },
  computed: mapState({
    mobileMenuOpen: state => state.ui.mobileMenuOpen
  }),
  mounted() {
      window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
      toggleMobileMenu() {
          this.$store.commit('toggleMobileMenu')
      },
      handleScroll(event) {
          // add a throttle to this
          if (window.scrollY > 0) {
              this.pageScrolled = true
              return
          }
          this.pageScrolled = false

      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    header {
        position: sticky;
        top: 0;
        font-weight: $font-semibold;
        background: $bg;
        z-index: 1;

        .navbar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 64px;
            padding-left: $padding;
            padding-right: $padding;

            .website-logo-wrapper {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                font-size: $font-size-sm;
            
                .website-logo {
                    height: 40px;
                    width: 40px;
                    border: 2px solid $secondary;
                    text-decoration: none;
                    position: relative;
                    margin-right: $margin-sm;
    
                    .website-logo-text {
                        color: $secondary;
                        position: absolute;
                        bottom: 0;
                        right: 5px;
                        font-size: 20px;
                        font-weight: $font-bold;
                    }
                }
            }

          
             .links {
                height: 64px;
                display: flex;
                align-items: center;
                margin-left: $margin;

                @media only screen and (max-width: $tablet-sm) {
                    display: none;
                }
            }

            .menu-button {
                display: none;
                border: none;
                background: none;
                color: $secondary;
                border: 1px solid $bg;
                transition: border-color 1s;

                @media only screen and (max-width: $tablet-sm) {
                    display: block;
                }
            }

            .menu-button:hover {
                cursor: pointer;
            }
        }

        .navbar-shadow {
            box-shadow: 0 1px 2px 0 rgba(black, 0.5);
        }

        .navbar-extended {
            display: none;
            position: absolute;
            top: 65px;
            left: 0;
            right: 0;
            height: calc(100vh - 65px);
            background: $bg;
            padding: $padding-lg;

            @media only screen and (max-width: $tablet-sm) {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .menu-content {
                max-width: 288px;
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: $margin-lg auto;

                .social-links {
                    margin: $margin-lg $margin-xl 0 $margin-xl;
                    display: flex;
                    justify-content: space-between;

                    a {
                        color: $tertiary;
                        text-decoration: none;
                    }

                    a:hover {
                        color: $secondary;
                    }
                }
            }
        }

        .router-link {
            display: flex;
            align-items: center;
            height: 100%;
            text-decoration: none;
            color: $tertiary;
            margin-left: $margin-sm;
            padding: 0 $padding;
            transition: color 0.3s;
            font-size: $font-size-sm;
            text-transform: capitalize;

            @media only screen and (max-width: $tablet-sm) {
                margin: 0;
                padding: $padding-sm 0;
                border-bottom: 1px solid $tertiary;
            }
        }

        .router-link:hover {
            color: $primary;
        }

        .router-link-active {
            color: $primary;
            position: relative;
        }
        .router-link-active::after {
            position: absolute;
            bottom: -2px;
            left: 0;
            height: 2px;
            width: 100%;
            content: " ";
            background: $secondary;
        }
    }



   

   

   



</style>
