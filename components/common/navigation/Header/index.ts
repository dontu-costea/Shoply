import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {
  mounted() {
    if (this.$auth.loggedIn) {
      this.$store.dispatch('modules/cart/getCart')
    }
  }

  get cartAmount() {
    let cart = this.$store.getters['modules/cart/getCart']
    if (!cart.length) {
      return '0'
    }
    return cart.length
  }

  async logout() {
    await this.$auth.logout()
    await this.$router.push('/')
  }
}