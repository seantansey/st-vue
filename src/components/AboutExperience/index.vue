<template>
    <section class="about-experience">
        <h1>Experience</h1>
        <menu-selector 
            :selected-index="selectedExperienceIndex"
            :selectors="experiences"
            @select="selectExperience"
        >
             <div class="job-content">
                <div class="job-content-label">{{  selectedExperience.company }}</div>
                <div v-for="position in selectedExperience.positions" :key="position.title">
                    <h3>{{ position.title }}</h3>
                    <div class="job-dates">
                        <font-awesome-icon icon="fa-solid fa-calendar" class="job-date-icon"/>
                        {{ formatDateString(position.start, position.end) }}
                    </div>
                </div>
                <ul>
                    <li v-for="(highlight, index) in selectedExperience.highlights" :key="index">
                        <span class="bullet-point"><font-awesome-icon icon="fa-solid fa-chevron-right" size="sm" /></span>
                        {{ highlight }}
                    </li>
                </ul>
                <div v-if="technologies.length" class="job-content-label">
                    Primary technologies
                    <div class="job-technologies">{{ technologies }}</div>
                </div>
            </div>
        </menu-selector>
    </section>
</template>

<script>
import MenuSelector from '@/components/shared/MenuSelector'
import config from './config'

export default {
  name: 'Experience',
  components: {
      MenuSelector
  },
  data() {  
    return {
          selectedExperienceIndex: 0,
          config
      }
  },
  methods: {
      formatDateString(start, end) {
          const options = { month: 'short', year: 'numeric' }
          const months = end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear()) + 1
          let duration
          if (months % 12 === 0) {
              duration = `${months / 12} yr`
          } else if (months > 12) {
              duration = `${Math.floor(months / 12)} yr ${months % 12} mos`
          } else {
              duration = `${months} mos`
          }
          return `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)} (${duration})`
      }, 
      selectExperience(index) {
          this.selectedExperienceIndex = index
      }
  },
  computed: {
      selectedExperience() {
          const { config, selectedExperienceIndex } = this
          return config.experiences[selectedExperienceIndex]
      },
      experiences() {
          const { config } = this
          return config.experiences.map((exp) => exp.company)
      },
      technologies() {
           const { config, selectedExperienceIndex } = this
           const technologies = config.experiences[selectedExperienceIndex].technologies || []
           return technologies.join(' · ')
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    .about-experience {
        margin-bottom: $margin-xl;

        h1 {
            font-size: $font-size-header;
            text-align: right;
            border-bottom: 1px solid $border-color;
            padding-bottom: $padding-xs;
        }

        .job-content {
            flex: 2;

            h3 {
                margin: $margin-xs 0;
            }

            .job-content-label {
                color: $secondary;
                font-weight: $font-bold;
            }

            .job-dates {
                color: $tertiary;
                font-size: $font-size-sm;
                font-weight: $font-semibold;

                .job-date-icon {
                    margin-right: $margin-xs;
                }
            }

            ul {
                list-style-type: none;
                margin: 0 0 $margin 0;
                padding: 0;
            }

            li {
                display: flex;
                margin: $margin-sm 0;

                .bullet-point {
                    margin-right: $margin;
                    color: $secondary;
                }
            }

            .job-technologies {
                margin-top: $margin-xs;
                font-size: $font-size-sm;
                color: $tertiary;
                font-weight: $font-semibold;
            }
        }    
    }
</style>
