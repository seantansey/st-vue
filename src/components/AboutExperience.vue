<template>
    <div class="about-experience">
        <h2>Professional Experience</h2>
        <h3>IHS Markit / S&P Global</h3>
        <div class="job-data">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span class="job-data-text">October 2020 - Present</span>
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span class="job-data-text">Boulder, Colorado / Remote</span>
        </div>
        <div class="job-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
            <span class="job-title-text">Software Engineer</span>
        </div>
        <div class="job-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
            <span class="job-title-text">Associate II Software Engineer</span>
        </div>
        <ul>
            <li>Working alongside a small agile team developed new UI features as part of sitewide redesign for a client in the financial industry.</li>
            <li>Refactored existing web components to support multi-tenancy allowing onboarding of new regions.</li>
            <li>Added support for Google Analytics tracking, allowing clients to see how users are interacting with their site.</li>
            <li>Refactored existing web components to meet accessibility requirements for ADA compliance.</li>
            <li>Built new APIs to support new web features.</li>
            <li>Unit tested all new code written both front and back end. </li>
        </ul>
        <h3>Izoox, LLC.</h3>
        <div class="job-data">
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span class="job-data-text">July 2019 - June 2020</span>
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span class="job-data-text">Longmont, Colorado</span>
        </div>
        <div class="job-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
            <span class="job-title-text">Software Developer</span>
        </div>
        <div class="job-title">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
            <span class="job-title-text">Jr. Software Developer</span>
        </div>
        <ul>
            <li>Lead developer on a cross platform iOS/Android React-Native mobile app.</li>
            <li>Lead front-end developer on a large interal application built in Vue, Apollo, GraphQL and Laravel.</li>
            <li>Supported an SEO overhaul and redesign on a site built in Ruby on Rails.</li>
            <li>Delivered feature updates and bug fixes on sites built in React, Laravel, Ruby on Rails and Wordpress.</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'AboutExperience',
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

    .about-experience {
        margin-top: $margin-xl;

        h3 {
            margin-bottom: $margin-xs;
            color: $green;
        }

        .job-data {
            font-size: 14px;
            color: $grey;

            .job-data-text {
            margin: 0 $margin-sm;
            }
        }

        .job-title {
            color: $green;
            margin-top: $margin-xs;
            margin-left: $margin-sm;

            .job-title-text {
            margin-left: $margin-sm;
            }
        }
    }

</style>
