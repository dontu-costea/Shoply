import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as _ from 'lodash'

@Component
export default class ProductsList extends Vue {
  searchValue = '' as String

  @Prop({ type: Array })
  products: any

  addToCart = _.debounce(async function (id: number) {
    try {
      await this.$axios.post('/cart', {
        productId: id,
        quantity: 1,
      })
      this.$store.dispatch('modules/cart/getCart')
      this.$store.dispatch('modules/popup/showPopup', {
        message: 'Product was added to cart',
        color: 'success',
        right: true,
      })
    } catch (e: any) {
      console.log(e)
    }
  }, 200)
}