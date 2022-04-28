<template>
    <nav>
        <div class="navbar">
            <router-link to="/" class="website-logo">
                <div class="website-logo-text">ST</div>
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
        padding: $padding-sm $padding-lg;
        opacity: 0.9;
        font-weight: bold;
        box-shadow: 0 0 5px 3px #13151d; // revist and create a variable, only show when scrolled?


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

            .green {
                color: $green;
            }

            .grey {
                color: $grey;
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
            transition: color 1.5s, text-shadow 1.5s;


            @media only screen and (max-width: $tablet-sm) {
                margin: $margin-sm 0;
            }
        }

        .router-link:hover {
            color: $white;
            text-shadow: 7px 7px 10px black;

        }

        .router-link-active {
            color: $green;
        }

        .website-logo {
            height: 50px;
            width: 50px;
            border: 3px solid $green;
            border-radius: 5px;
            text-decoration: none;
            position: relative;
             box-shadow:
                inset 0 0 5px rgba($green, 1),
                0 0 5px rgba($green, 1);
            text-shadow: 
                0 0 5px rgba($green, 1);

            .website-logo-text {
                position: absolute;
                bottom: 0;
                right: 5px;
                font-size: 25px;
                font-weight: bold;
                color: $green;
            }
        }

        .website-logo:hover {
            box-shadow:
                inset 0 0 10px rgba($green, 1),
                0 0 10px rgba($green, 1);
            text-shadow: 
                0 0 10px rgba($green, 1),


        }

        
    }



   

   

   



</style>
