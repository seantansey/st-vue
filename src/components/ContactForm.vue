<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-input">
        <input v-model="name" type="text" placeholder="George Oscar Bluth, Sr." :class="{ complete: name }">
        <label>Name</label>
    </div>
     <div class="form-input">
        <input v-model="email" type="email" placeholder="george@bluthcompany.com" :class="{ complete: email }">
        <label>Email</label>
    </div>
     <div class="form-input">
        <input v-model="subject" type="text" placeholder="Finances.." :class="{ complete: subject }">
        <label>Subject</label>
    </div>
     <div class="form-input">
        <textarea v-model="message" placeholder="Well... there’s always money in the banana stand." :class="{ complete: message }"></textarea>
        <label>Message</label>
    </div>
    <button :disabled="!name || !email || !subject || !message" type="submit">
        Send
    </button>
  </form>
</template>

<script>
import postMessage from '../api/contact.js'

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
          postMessage({ name, email, subject, message })
      },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

  .contact-form {
    flex: 1;

    .form-input {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: $margin;

        label {
            display: block;
            font-size: $font-size-xs;
            margin-bottom: $margin-xs;
            font-weight: bold;
        }
        
        input,
        textarea {
            background: transparent;
            border: none;
            border-bottom: 1px solid #334155;
            outline: none;
            color: $primary;
            padding: $padding-xs;
            font-weight: bold;
            resize: none;
        }

        textarea {
            font-family: inherit;
            min-height: 200px;
            border: 1px solid #334155;
        }

        ::placeholder {
            color: $tertiary;
        }

        input:focus,
        textarea:focus,
        input:hover,
        textarea:hover {
            border-color: $secondary;
        }

        input.complete + label,
        textarea.complete + label {
            color: $secondary;
        }
    }

    button {
        float:right;
        background: $secondary;
        padding: $padding-xs $padding;
        border-radius: 3px;
        border: none;
        color: $primary;
        font-size: $font-size-sm;

        .submit-icon {
            margin-left: $margin-xs;
        }
    }

    button:hover {
        outline: 1px solid $tertiary;
        cursor: pointer;
    }

    button:disabled {
        background: $tertiary;
        cursor: not-allowed;
    }
  }
</style>

