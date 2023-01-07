<script lang="ts">
import * as _ from 'lodash'

export default {
  name: 'Login',

  middleware: 'loggedIn',

  layout: 'auth',

  data: () => ({
    model: {
      email: '' as String,
      password: '' as String,
    },
    showPassword: false as Boolean,
    emailRules: [
      (v: any) => !!v || 'Email is required',
      (v: any) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      (v: any) => !!v || 'Password is required',
      (v: any) => (v && v.length >= 8) || 'Password must have 8+ characters',
    ],
  }),

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.model,
        })
        await this.$store.dispatch('modules/popup/keepPopup', true)
        await this.$store.dispatch('modules/popup/showPopup', {
          message: `Welcome ${this.$auth.user.firstName} ${this.$auth.user.lastName}`,
          color: 'primary',
          top: true,
        })
      } catch (e: any) {
        this.$store.dispatch('modules/popup/showPopup', {
          message: e.response.data.message,
          color: 'error',
          right: true,
        })
      }
    },
  },
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="mt-4">
          <v-col
            ><v-img :src="require('@/assets/img/login-img.png')"></v-img
          ></v-col>
          <v-col class="form__block">
            <form @submit.prevent="login" class="form">
              <span class="form__title">LOGIN</span>
              <v-text-field
                v-model="model.email"
                :rules="emailRules"
                label="Email"
                filled
                rounded
                dense
                background-color="#F3F6FF"
                prepend-inner-icon="mdi-at"
                class="form__input"
              ></v-text-field>
              <v-text-field
                v-model="model.password"
                :rules="passwordRules"
                label="Password"
                filled
                rounded
                dense
                background-color="#F3F6FF"
                prepend-inner-icon="mdi-lock-outline"
                class="form__input"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <NuxtLink to="#" class="forgot__password"
                >Forgot password?</NuxtLink
              >
              <v-btn rounded elevation="0" class="form__button" type="submit"
                >Login</v-btn
              >
              <span class="create__account"
                >Don't have an account?
                <NuxtLink to="/register" class="register"
                  >Register now!</NuxtLink
                ></span
              >
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Popup />
  </v-app>
</template>

<style scoped lang="scss">
.form__block {
  font-family: 'Lato';
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 132%;
      letter-spacing: 0.015em;
      color: #334756;
      margin-bottom: 35px;
    }
    &__input {
      width: 337px;
    }
    .forgot__password {
      align-self: flex-end;
      font-size: 16px;
      line-height: 19px;
      color: #334756;
    }
    &__button {
      width: 337px;
      margin-top: 40px;
      margin-bottom: 25px;
      background-color: #211f1c;
      color: #fbfbfb;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
    .create__account {
      font-size: 16px;
      line-height: 19px;
      color: #334756;
      .register {
        color: #616467;
      }
    }
  }
}
</style>
