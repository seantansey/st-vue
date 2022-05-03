<template>
    <header>
        <nav>
            <div class="navbar">
                <router-link to="/" class="website-logo">
                    <div class="website-logo-text">ST</div>
                </router-link>
                <div class="links">
                    <router-link v-for="link in links" :to="{ name: link }" :key="link" class="router-link">
                        {{ link }}
                    </router-link>
                </div>
                <button class="menu-button" @click="toggleMenu">
                    <font-awesome-icon v-if="menuOpen" icon="fa-solid fa-xmark" size="xl"/>
                    <font-awesome-icon v-else icon="fa-solid fa-bars" size="xl"/>
                </button>
            </div>  
            <div v-if="menuOpen" class="navbar-extended">
                <div class="menu-content">
                    <router-link v-for="link in links" :to="link" :key="link" @click.native="toggleMenu" class="router-link">
                        {{ link }}
                    </router-link>
                    <div class="social-links">
                        <a class="linkedin" href="https://www.linkedin.com/in/seantansey/" target="_blank">
                            <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
                        </a> 
                        <a class="github" href="https://github.com/stansey92" target="_blank">
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

export default {
  name: 'Navbar',
  data() {
      return {
          menuOpen: false,
          links: ['about', 'blog', 'contact']
      }
  },
  methods: {
      toggleMenu() {
          this.menuOpen = !this.menuOpen
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    header {
        position: sticky;
        top: 0;
        font-weight: bold;
        background: $bg;
        z-index: 1;
        border-bottom: 1px solid $border-color;

        .navbar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: $padding-sm $padding-lg;

            @media only screen and (max-width: $mobile) {
                padding-left: $padding;
                padding-right: $padding;
            }

            .website-logo {
                height: 40px;
                width: 40px;
                border: 2px solid $secondary;
                border-radius: 3px;
                text-decoration: none;
                position: relative;

                .website-logo-text {
                    color: $secondary;
                    position: absolute;
                    bottom: 0;
                    right: 5px;
                    font-size: 20px;
                    font-weight: bolder;
                }
            }
          
             .links {
                @media only screen and (max-width: $tablet-sm) {
                    display: none;
                }
            }

            .menu-button {
                display: none;
                border: none;
                background: none;
                color: $secondary;
                border-radius: 3px;
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

        .navbar-extended {
            display: none;
            position: absolute;
            top: 65px;
            left: 0;
            right: 0;
            background: $bg;
            padding: $padding-lg;
            box-shadow: 0 6px 6px -2px #13151d; // revist and create a variable, only show when scrolled?

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
                margin: auto;

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
            text-decoration: none;
            color: $primary;
            margin-left: $margin-xl;
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
            color: $secondary;
        }

        .router-link-active {
            color: $secondary;
        }
    }



   

   

   



</style>
