<template>
    <section class="about-experience">
        <h1>Experience</h1>
        <menu-selector 
            :selected-index="selectedExperienceIndex"
            :selectors="experiences"
            @select="selectExperience"
        >
             <div class="job-overview">
                <h3>{{ selectedExperience.titles }}<span class="green"><span class="grey"> @ </span>{{ selectedExperience.company }}</span></h3>
                <div class="job-data">
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                    <span class="job-data-text">{{ selectedExperience.dates }}</span>
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <span class="job-data-text">{{ selectedExperience.location }}</span>
                </div>
                <ul>
                    <li v-for="(highlight, index) in selectedExperience.highlights" :key="index">
                        <span class="bullet-point"><font-awesome-icon icon="fa-solid fa-chevron-right" size="sm" /></span>
                        {{ highlight }}
                    </li>
                </ul>
                <div v-if="technologies.length" class="job-technologies">
                    Primary technologies
                    <div class="technologies">{{ technologies }}</div>
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
        }

        .job-overview {
            flex: 2;

            h3 {
                margin: 0 $margin-sm $margin-xs 0;
            }

            .job-data {
                font-size: $font-size-sm;
                color: $tertiary;

                .job-data-text {
                    margin: 0 $margin 0 $margin-sm;
                    font-weight: $font-semibold;
                }
            }

            ul {
                list-style-type: none;
                margin: 0;
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
                margin-top: $margin;
                font-weight: $font-bold;
                color: $secondary;

                .technologies {
                    margin-top: $margin-xs;
                    font-size: $font-size-sm;
                    color: $tertiary;
                    font-weight: normal;
                }
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
