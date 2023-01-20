import { Component, Vue } from 'nuxt-property-decorator'
import * as _ from 'lodash'

@Component({ layout: 'auth', middleware: ['loggedIn'] })
export default class Login extends Vue {
  model = {
    email: '' as String,
    password: '' as String,
  }
  showPassword = false as Boolean
  emailRules = [
    (v: any) => !!v || 'Email is required',
    (v: any) => /.+@.+/.test(v) || 'E-mail must be valid',
  ]
  passwordRules = [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length >= 8) || 'Password must have 8+ characters',
  ]

  login = _.debounce(async function (){
    try {
      await this.$auth.loginWith('local', {
        data: this.model,
      })
      this.$store.dispatch('modules/popup/keepPopup', true)
      this.$store.dispatch('modules/popup/showPopup', {
        message: `Welcome ${this.$auth.user?.firstName} ${this.$auth.user?.lastName}`,
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
  }, 200)
}