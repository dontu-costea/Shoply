import { Component, Vue } from 'nuxt-property-decorator'
import api from '@/api'
import * as _ from 'lodash'

@Component
export default class CartProducts extends Vue {
  get cart() {
    return this.$store.getters['modules/cart/getCart']
  }

  increaseQuantity = _.debounce(async function (id: number) {
    try {
      await api.cart().increaseQuantity(id)
      await this.$store.dispatch('modules/cart/getCart')
    } catch (e: any) {
      console.log(e)
    }
  }, 200)

  reduceQuantity = _.debounce(async function (id: number) {
    try {
      await api.cart().reduceQuantity(id)
      await this.$store.dispatch('modules/cart/getCart')
    } catch (e: any) {
      console.log(e)
    }
  }, 200)

  deleteProduct = _.debounce(async function (id: number) {
    try {
      await api.cart().deleteProduct(id)
      await this.$store.dispatch('modules/cart/getCart')
      this.$store.dispatch('modules/popup/showPopup', {
        message: 'Product was deleted',
        color: 'error',
        right: true,
      })
    } catch (e: any) {
      console.log(e)
    }
  }, 200)
}