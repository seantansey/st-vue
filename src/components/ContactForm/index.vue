<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-input">
        <input v-model="name" type="text" placeholder="John Doe" :class="{ complete: name }">
        <label>Name</label>
    </div>
     <div class="form-input">
        <input v-model="email" type="email" placeholder="john.doe@example.com" :class="{ complete: email }">
        <label>Email</label>
    </div>
     <div class="form-input">
        <input v-model="subject" type="text" placeholder="Subject" :class="{ complete: subject }">
        <label>Subject</label>
    </div>
     <div class="form-input">
        <textarea v-model="message" placeholder="Brief description of the services you are looking for..." :class="{ complete: message }"></textarea>
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
            this.messageError = true
            this.resetForm()
            return
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
            font-weight: $font-bold;
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
            resize: none;
        }

        textarea {
            font-family: inherit;
            font-size: $font-size-sm;
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

    .button-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .success {
            color: $secondary;
            font-size: $font-size-sm;
            font-weight: $font-bold;
            margin-right: $margin;
        }

        .error {
            color: $error;
            font-size: $font-size-sm;
            font-weight: $font-bold;
            margin-right: $margin;
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity 1s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
        }
    }

     button {
        color: $button-white;
        background: $secondary;
        font-size: $font-size-sm;
        font-weight: $font-semibold;
        border: none;
        padding: $padding-xs $padding;
        transition: background 0.3s;
    }

    button:hover {
        background: $secondary-hover;
        cursor: pointer;
    }

    button:disabled {
        background: $tertiary;
        cursor: not-allowed;
    }
  }
</style>

