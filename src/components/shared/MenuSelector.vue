<template>
    <div class="menu" :class="{ right: rightAlign }">
         <div class="menu-selector">
            <div 
                v-for="(selector, index) in selectors" 
                :key="index" 
                :class="{ selected: index === selectedIndex }" 
                class="selector"
                @click="select(index)"
            >
                {{ selector }}
            </div>
        </div>
        <div class="menu-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
  name: 'MenuSelector',
  props: {
      rightAlign: Boolean,
      selectors: Array,
      selectedIndex: {
          type: Number,
          default: 0
      }
  },
  methods: {
      select(index) {
          this.$emit('select', index)
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.menu {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: $tablet-sm) {
        flex-direction: column;
    }

    .menu-selector {
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        @media only screen and (max-width: $tablet-sm) {
            flex-direction: row;
            margin-bottom: $margin-lg;
        }

        .selector {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            transition: all 0.3s linear;
            border-right: 3px solid $tertiary;
            margin-right: 50px;
            flex: 1;
            color: $tertiary;
            padding: $padding;
            white-space: pre;

            @media only screen and (max-width: $tablet-sm) {
                border-bottom: 3px solid $tertiary;
                border-right: none;
                margin-right: 0;
            }
        }

        .selector:hover {
            cursor: pointer;
            color: $primary;
        }

        .selector.selected {
            flex: 2;
            font-weight: bold;
            border-color: $secondary;
            color: $primary;
        }
    }

    .menu-content {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.menu.right {
    flex-direction: row-reverse;

    @media only screen and (max-width: $tablet-sm) {
        flex-direction: column;
    }

    .menu-selector {
        .selector {
            border-right: none;
            margin-right: 0;
            border-left: 3px solid $tertiary;
            margin-left: 50px;

            @media only screen and (max-width: $tablet-sm) {
                border-bottom: 3px solid $tertiary;
                border-left: none;
                margin-left: 0;
            }
        }

        .selector:hover {
            cursor: pointer;
            color: $primary;
        }

        .selector.selected {
            flex: 2;
            font-weight: bold;
            border-color: $secondary;
            color: $primary;
        }
    }
}


</style>
