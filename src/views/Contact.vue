<template>
  <div class="contact">
      <h1>Contact</h1>
      <h3>Interested in working together? You can contact me using the details found on this page or by sending a message through the form below!</h3>
      
      <h4>Social media</h4>
      <a class="linkedin" href="https://www.linkedin.com/in/seantansey/">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" class="social-icon"/>
        <span class="social-text">linkedin.com/in/seantansey</span>
      </a> 
       <a class="github" href="https://github.com/stansey92">
        <font-awesome-icon icon="fa-brands fa-github" size="lg"  class="social-icon" />
        <span class="social-text">github.com/stansey92</span>
      </a>
      <contact-form></contact-form>
  
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .contact {
    padding: $padding 100px;

    @media only screen and (max-width: $tablet-lg) {
      padding-left: $padding-xl;
      padding-right: $padding-xl;
    }

    @media only screen and (max-width: $mobile) {
      padding-left: $padding;
      padding-right: $padding;
    }

    h3 {
      color: $green;
    }

    .social-icon {
      margin-right: $margin-sm;
    }

    .social-text {
      font-size: 16px;
    }

    .linkedin {
      display: block;
      margin: $margin-sm 0;
      color: #0a66c2;
      text-decoration: none;
    }

    .linkedin:hover {
      color: $white;
      text-decoration: underline;
    }

    .github {
      display: block;
      margin: $margin-sm 0;
      color: $grey;
      text-decoration: none;
    }

    .github:hover {
      color: $green;
      text-decoration: underline;
    }




  }
</style>

