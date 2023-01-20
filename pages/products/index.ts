import { Component, Vue } from 'nuxt-property-decorator'
import api from '@/api'

@Component
export default class Products extends Vue {
  totalPages = 0 as number
  params = {
    page: 1,
    pageSize: 8,
  }
  products = [] as any

  mounted() {
    this.loadData()
  }

  async loadData() {
    try {
      const { data, meta } = await api.products().getProducts(this.params)
      this.products = data
      this.totalPages = meta.total
    } catch (e: any) {
      console.log(e)
    }
  }

  changePage() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.loadData()
  }
}