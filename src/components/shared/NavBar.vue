<template>
    <nav>
        <div class="navbar">
            <router-link to="/" class="home-link">
                Sean Tansey
            </router-link>
            <div class="links">
                <router-link v-for="link in links" :to="link" :key="link" class="router-link">
                    {{ link }}
                </router-link>
            </div>
            <button class="menu-button" @click="toggleMenu">
                <font-awesome-icon icon="fa-solid fa-bars" size="lg"/>
            </button>
        </div>  
        <div v-if="menuOpen" class="navbar-extended">
            <router-link v-for="link in links" :to="link" :key="link" @click.native="toggleMenu" class="router-link">
                {{ link }}
            </router-link>
        </div>
    </nav>
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
          console.log('hit')
          this.menuOpen = !this.menuOpen
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    nav {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        background: $black;
        padding: $padding $padding-lg;
        border-bottom: 0.5px solid #2c3e50;
        // box-shadow: 0 0 5px 3px black; // revist and create a variable

        .navbar {
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

             .links {
                @media only screen and (max-width: $tablet-sm) {
                    display: none;
                }
            }

             .menu-button {
                display: none;
                border: none;
                background: none;
                color: $green;

                @media only screen and (max-width: $tablet-sm) {
                display: block;
                }
            }

            .menu-button:hover {
                color: $white;
                cursor: pointer;
            }
        }

        .navbar-extended {
            display: none;

            @media only screen and (max-width: $tablet-sm) {
                display: flex;
                flex-direction: column;
            }
        }

        .router-link {
            text-decoration: none;
            color: $grey;
            margin-left: $margin-xl;

            @media only screen and (max-width: $tablet-sm) {
                margin: $margin-sm 0;
            }
        }

        .router-link:hover {
            color: $white;
        }

        .router-link-active {
            color: $green;
        }

        .home-link {
            color: $white;
            text-decoration: none;
            font-size: 24px;
            font-weight: bold;
        }

        .home-link:hover {
            color: $green;
        }
    }



   

   

   



</style>
