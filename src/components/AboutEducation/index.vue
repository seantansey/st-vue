<template>
  <section class="about-education">
    <h2>Education</h2>
    <menu-selector
      :selectors="schools"
      :selected-index="selectedEducationIndex"
      @select="selectEducation"
    >
      <div>
         <h3>{{ selectedEducation.program }}<span class="green"><span class="grey"> @ </span>{{ selectedEducation.title }}</span></h3>
          <div class="education-data">
              <font-awesome-icon icon="fa-solid fa-calendar" />
              <span class="education-data-text">{{ selectedEducation.dates }}</span>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              <span class="education-data-text">{{ selectedEducation.location }}</span>
          </div>
      </div>
    </menu-selector>
  </section>
</template>

<script>
import MenuSelector from '@/components/shared/MenuSelector'
import config from './config'

export default {
  name: 'AboutEducation',
  components: {
     MenuSelector
  },
  data() {
    return {
      config,
      selectedEducationIndex: 0
    }
  },
   methods: {
    selectEducation(index) {
      this.selectedEducationIndex = index
    }
  },
  computed: {
      selectedEducation() {
          const { config, selectedEducationIndex } = this
          return config.education[selectedEducationIndex]
      },
      schools() {
          const { config } = this
          return config.education.map((school) => school.title)
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .about-education {
    margin-bottom: $margin-xl;

    h2 {
      font-size: $font-size-xl;
    }

    h3 {
        margin-top: 0;
        margin-bottom: $margin-sm;
    }

    .education-data {
        font-size: $font-size-sm;
        color: $tertiary;
        font-weight: $font-semibold;

        .education-data-text {
            margin: 0 $margin-sm;
        }
    }

    .grey {
          color: $tertiary;
      }
    .green {
        color: $secondary;
    }     
  }
</style>
