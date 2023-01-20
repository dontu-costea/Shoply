import { Component, Vue } from 'nuxt-property-decorator'
import api from '@/api'
import _ from 'lodash'

@Component
export default class ProductView extends Vue {
  product = {} as any
  category = '' as any
  amount = 1 as number

  mounted() {
    this.loadData()
  }

  async loadData() {
    try {
      this.product = await api.products().getProduct(this.$route.params.id)
      this.category = await api
        .categories()
        .getCategory(this.product.categoryId)
    } catch (e: any) {
      console.log(e)
    }
  }

  addToCart = _.debounce(async function () {
    try {
      await api.cart().addToCart({
        productId: this.product.id,
        quantity: this.amount,
      })
      this.$store.dispatch('modules/cart/getCart')
      this.$store.dispatch('modules/popup/showPopup', {
        message: 'Product was added to cart',
        color: 'success',
        right: true,
      })
    } catch (e: any) {
      console.log(e)
      this.$store.dispatch('modules/popup/showPopup', {
        message: 'You need to log in to add to cart',
        color: 'error',
        right: true,
      })
    }
  }, 500)
}