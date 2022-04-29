<template>
    <div class="about-experience">
        <h1>Experience</h1>
        <menu-selector 
            :selected-index="selectedExperienceIndex"
            :selectors="experiences"
            @select="selectExperience"
        >
             <div class="job-overview">
                <h3>{{ selectedExperience.title }}<span class="green"><span class="grey"> // </span>{{ selectedExperience.company }}</span></h3>
                <div class="job-data">
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                    <span class="job-data-text">{{ selectedExperience.dates }}</span>
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <span class="job-data-text">{{ selectedExperience.location }}</span>
                </div>
                <ul>
                    <li v-for="(highlight, index) in selectedExperience.highlights" :key="index">{{ highlight }}</li>
                </ul>
            </div>
        </menu-selector>
    </div>
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
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    .about-experience {
        margin-bottom: 100px;

        h1 {
            font-size: $font-size-header;
            text-align: right;
            border-bottom: 1px solid $tertiary;
            margin-bottom: 50px;
        }

        .job-overview {
            flex: 2;

            h3 {
                margin-top: 0;
                margin-bottom: $margin-sm;
            }

            .job-data {
                font-size: $font-size-sm;
                color: $tertiary;

                .job-data-text {
                    margin: 0 $margin-sm;
                    font-weight: bold;
                }
            }

            ul {
                padding-inline-start: $padding;
            }

            li {
                padding-bottom: $padding-sm;
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
