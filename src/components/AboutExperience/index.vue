<template>
    <section class="about-experience">
        <h1>Experience</h1>
        <menu-selector 
            :selected-index="selectedExperienceIndex"
            :selectors="experiences"
            @select="selectExperience"
        >
             <div class="job-overview">
                <!-- <div class="job-company">
                    <h4>{{ selectedExperience.company }}</h4>
                    <div class="job-location">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <span class="location-text">{{ selectedExperience.location }}</span>
                    </div>
                </div> -->
                <!-- <div v-for="(title, index) in selectedExperience.titles" :key="title" class="job-role">
                    <h3 :class="{ current: index === 0 }">{{ title }}</h3>
                    <div class="job-dates">
                        <font-awesome-icon icon="fa-solid fa-calendar" />
                        <span class="date-text">{{ selectedExperience.dates[index] }}</span>
                    </div>
                </div> -->



                <h3>{{ selectedExperience.titles }}<span class="green"><span class="grey"> // </span>{{ selectedExperience.company }}</span></h3>

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
                margin: 0 $margin-sm $margin-sm 0;

                 @media only screen and (max-width: $mobile) {
                    margin: $margin-sm 0 $margin-xs 0;
                }
            }
            

            .current {
                font-size: $font-size-lg;
                color: $secondary;
            }

            h4 {
                margin-top: 0;
                margin-bottom: $margin-sm;

                @media only screen and (max-width: $mobile) {
                    margin-bottom: $margin-xs;
                }
            }

            .job-company {
                display: flex;
                justify-content: space-between;
                
                @media only screen and (max-width: $mobile) {
                    flex-direction: column;
                }

                .job-location {
                    font-size: $font-size-sm;
                    color: $tertiary;

                    .location-text {
                        margin: 0 $margin-sm;
                        font-weight: bold;
                    }
                }
            }

             .job-role {
                display: flex;
                justify-content: space-between;
                
                @media only screen and (max-width: $mobile) {
                    flex-direction: column;
                }

                .job-dates {
                    text-align: right;
                    font-size: $font-size-sm;
                    color: $tertiary;

                    @media only screen and (max-width: $mobile) {
                        text-align: left;
                    }



                    .date-text {
                        margin: 0 $margin-sm;
                        font-weight: bold;
                    }
                }
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
