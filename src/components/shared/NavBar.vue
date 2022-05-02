<template>
    <header>
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
                    <font-awesome-icon icon="fa-solid fa-bars" size="xl"/>
                </button>
            </div>  
            <div v-if="menuOpen" class="navbar-extended">
                <router-link v-for="link in links" :to="link" :key="link" @click.native="toggleMenu" class="router-link">
                    {{ link }}
                </router-link>
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
          console.log('hit')
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
        opacity: 0.98;
        font-weight: bold;
        background: $bg;
        box-shadow: 0 6px 6px -2px #13151d; // revist and create a variable, only show when scrolled?

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
                height: 50px;
                width: 50px;
                border: 3px solid $secondary;
                border-radius: 5px;
                text-decoration: none;
                position: relative;
                box-shadow:
                    inset 0 0 5px rgba($secondary, 1),
                    0 0 5px rgba($secondary, 1);
                text-shadow: 
                    0 0 5px rgba($secondary, 1);
                transition: box-shadow 1s, text-shadow 1s;

                .website-logo-text {
                    position: absolute;
                    bottom: 0;
                    right: 5px;
                    font-size: 25px;
                    font-weight: bold;
                    color: $secondary;
                }
            }

            .website-logo:hover {
                box-shadow:
                    inset 0 0 10px rgba($secondary, 1),
                    0 0 10px rgba($secondary, 1);
                text-shadow: 0 0 10px rgba($secondary, 1);
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
                border-color: #2B3241;
            }
        }

        .navbar-extended {
            display: none;
            position: absolute;
            top: 76px;
            left: 0;
            right: 0;
            background: $bg;
            padding: 0 $padding-lg;
            box-shadow: 0 6px 6px -2px #13151d; // revist and create a variable, only show when scrolled?

            @media only screen and (max-width: $tablet-sm) {
                display: flex;
                flex-direction: column;
            }
        }

        .router-link {
            text-decoration: none;
            color: $tertiary;
            margin-left: $margin-xl;
            transition: color 1s, text-shadow 1s;

            @media only screen and (max-width: $tablet-sm) {
                margin: $margin 0 $margin $margin-xs;
            }
        }

        .router-link:hover {
            color: $secondary;
            text-shadow: 0 0 10px rgba($secondary, 1);
        }

        .router-link-active {
            color: $secondary;
        }
    }



   

   

   



</style>
