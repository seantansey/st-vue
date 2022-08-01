<template>
  <section class="about-skills">
   <h1>Skills</h1>
    <menu-selector 
      :selectors="categories"
      :selected-index="selectedCategoryIndex"
      right-align
      @select="selectCategory"
    >
        <div class="logo-row">
          <div v-for="skill in selectedCategorySkills" :key="skill[0]" class="skill">
            <i :class="skill[1]" class="colored"></i>
            {{ skill[0] }}
          </div>
      </div>
    </menu-selector>
  </section>
</template>

<script>
import MenuSelector from '@/components/shared/MenuSelector'
import config from './config'

export default {
  name: 'AboutSkills',
  components: {
    MenuSelector
  },
  data() {
    return {
      config,
      selectedCategoryIndex: 0
    }
  },
  methods: {
    selectCategory(index) {
      this.selectedCategoryIndex = index
    }
  },
  computed: {
      selectedCategorySkills() {
          const { config, selectedCategoryIndex } = this
          return config.skills[selectedCategoryIndex].technologies
      },
      categories() {
          const { config } = this
          return config.skills.map((skill) => skill.category)
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .about-skills {
    margin-bottom: $margin-section;

    h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $border-color;
      padding-bottom: $padding-xs;
    }

    .logo-row {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      text-align: center;
      font-weight: $font-bold;
      font-size: $font-size-sm;
      color: $quaternary;
      
      i {
        display: block;
        font-size: 80px;
        padding: $padding-sm;
      }

      .skill {
        padding: $padding-sm;
      }
    }
  }
 
</style>
