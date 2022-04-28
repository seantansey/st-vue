<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <h4>Contact</h4>
    <div class="form-input">
        <input v-model="name" type="text">
        <label>Name</label>
    </div>
     <div class="form-input">
        <input v-model="email" type="email">
        <label>Email</label>
    </div>
     <div class="form-input">
        <input v-model="subject" type="text">
        <label>Subject</label>
    </div>
     <div class="form-input">
        <textarea v-model="message"></textarea>
        <label>Message</label>
    </div>
    <button :disabled="!name || !email || !subject || !message" type="submit">
        Send
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
      return {
          name: '',
          email: '',
          subject: '',
          message: ''
      }
  },
  methods: {
      submitForm() {
          const { name, email, subject, message } = this
          if (!name || !email, !subject, !message) {
              console.log('missing')
          }
          this.api({ name, email, subject, message })

          // cant send email via js, need to do this on the server
      },
      async api({ name, email, subject, message }) {

          const body = {
              name,
              email,
              subject,
              message
          }
          console.log({body})
          const response = await fetch('http://localhost:3000/contact',{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
          })
          const json = await response.json()
          console.log(json)
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .contact-form {
    padding: $padding 0;

    .form-input {
        display: flex;
        flex-direction: column-reverse;
        margin: $margin 0;

        label {
            display: block;
            font-size: 12px;
            margin-bottom: $margin-xs;
        }
        
        input,
        textarea {
            background: transparent;
            border: 1px solid #334155;
            border-radius: 3px;
            outline: none;
            color: $white;
            padding: $padding-xs;
            font-weight: bold;
        }

        textarea {
            font-family: inherit;
            min-height: 200px;
        }

        input:focus + label,
        textarea:focus + label,
        input:hover + label,
        textarea:hover + label {
            color: $green;
        }

        input:focus,
        textarea:focus,
        input:hover,
        textarea:hover {
            outline: 1px solid #334155;
        }
    }

    button {
        float:right;
        background: $green;
        padding: $padding-xs $padding;
        border-radius: 3px;
        border: none;
        color: $white;
        font-size: 14px;

        .submit-icon {
            margin-left: $margin-xs;
        }
    }

    button:hover {
        outline: 1px solid $grey;
        cursor: pointer;
    }

    button:disabled {
        background: $grey;
        cursor: not-allowed;
    }
  }
</style>

