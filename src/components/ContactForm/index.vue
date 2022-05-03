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
    <div class="button-row">
        <transition name="fade">
            <div v-if="messageSent" class="success">Message sent successfully!</div>
        </transition>
         <transition name="fade">
            <div v-if="messageError" class="error">Message not delivered. Please try again</div>
        </transition>
        <button :disabled="!name || !email || !subject || !message" type="submit">
            Send
        </button>
    </div>
  </form>
</template>

<script>
import postMessage from '../../api/contact.js'

export default {
  name: 'ContactForm',
  data() {
      return {
          name: '',
          email: '',
          subject: '',
          message: '',
          messageSent: false,
          messageError: false
      }
  },
  methods: {
      async submitForm() {
        const { name, email, subject, message } = this
        if (!name || !email, !subject, !message) {
            console.log('missing')
            //need error handling
        }
        const sendMessage = await postMessage({ name, email, subject, message })
        if (sendMessage.error) {
            this.messageError = true
            this.resetForm()
            return
        }
        this.resetForm()
        this.messageSent = true
        setTimeout(() => {
            this.messageSent = false
        }, 5000)
      },
      resetForm() {
          this.name = ''
          this.email = ''
          this.subject = ''
          this.message = ''
      }
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

        textarea + label {
            margin-bottom: $margin-sm;
        }
        
        input,
        textarea {
            background: transparent;
            border: none;
            border-bottom: 1px solid #334155;
            outline: none;
            color: $primary;
            padding: $padding-xs $padding-sm;
            font-weight: bold;
            resize: none;
        }

        textarea {
            font-family: inherit;
            min-height: 200px;
            border: 1px solid #334155;
            border-radius: 2px;
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

    .button-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;


        .success {
            color: $secondary;
            font-size: $font-size-sm;
            font-weight: bold;
        }

        .error {
            color: $error;
            font-size: $font-size-sm;
            font-weight: bold;
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity 1s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
        
    }

    button {
        background: $secondary;
        padding: $padding-xs $padding;
        border-radius: 3px;
        border: none;
        color: $primary;
        font-size: $font-size-sm;
        margin-left: $margin;

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

