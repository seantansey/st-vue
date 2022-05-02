<template>
  <page>
    <div class="contact">
      <h1>Contact</h1>
      <div class="flex-row">
        <div class="contact-info">
          <h3>Interested in working together? Have a question? Contact me through any of the means below!</h3>
          <h4>Social media</h4>
          <a class="linkedin" href="https://www.linkedin.com/in/seantansey/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" class="social-icon"/>
            <span class="social-text">linkedin.com/in/seantansey</span>
          </a> 
          <a class="github" href="https://github.com/stansey92" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" size="lg"  class="social-icon" />
            <span class="social-text">github.com/stansey92</span>
          </a>
        </div>
        <div class="contact-form-wrapper">
          <h4>Send a message</h4>
          <contact-form></contact-form>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import Page from '@/components/shared/Page.vue'


export default {
  name: 'Contact',
  components: {
    ContactForm,
    Page
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .contact {

    h1 {
      font-size: $font-size-header;
      border-bottom: 1px solid $tertiary;
      margin-bottom: 50px;
    }

    h3 {
      margin-top: 0;
      margin-bottom: $margin-sm;
    }


    .flex-row {
      display: flex;
      flex-direction: row;

      @media only screen and (max-width: $tablet-sm) {
        flex-direction: column;
      }
    }

    .contact-info {
      flex: 1;
      margin-right: $margin-lg;
    }

    h1 {
      font-size: $font-size-header;
    }

    h3 {
      color: $secondary;
    }

    .social-icon {
      margin-right: $margin-sm;
    }

    .social-text {
      font-size: $font-size;
    }

    .linkedin {
      display: block;
      margin: $margin-sm 0;
      color: #0a66c2;
      text-decoration: none;
    }

    .linkedin:hover {
      color: $primary;
      text-decoration: underline;
    }

    .github {
      display: block;
      margin: $margin-sm 0;
      color: $tertiary;
      text-decoration: none;
    }

    .github:hover {
      color: $secondary;
      text-decoration: underline;
    }

    .contact-form-wrapper {
      flex: 1;

      h4 {
        display: none; 
          @media only screen and (max-width: $tablet-sm) {
            display: block;
          }
      }
        
    }
  }
</style>

