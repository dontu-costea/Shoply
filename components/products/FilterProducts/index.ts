import { Component, Vue } from 'nuxt-property-decorator'
import api from '@/api'

@Component
export default class FilterProducts extends Vue {
  categories = [] as any
  showLess = true as Boolean

  mounted() {
    this.getCategories()
  }

  async getCategories() {
    try {
      this.categories = await api.categories().getCategories()
    } catch (e: any) {
      console.log(e)
    }
  }
}