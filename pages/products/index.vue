<script lang="ts">
import api from '@/api'

export default {
  name: 'Products',

  data: () => ({
    totalPages: 0 as number,
    params: {
      page: 1,
      pageSize: 8,
    },
    products: [] as any,
  }),

  mounted() {
    this.loadData()
  },

  methods: {
    async loadData() {
      try {
        const { data, meta } = await api.products().getProducts(this.params)
        this.products = data
        this.totalPages = meta.total
      } catch (e: any) {
        console.log(e)
      }
    },

    changePage() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.loadData()
    },
  },
}
</script>

<template>
  <v-container>
    <PagesBar :activePage="'Products'" />
    <v-row>
      <v-col cols="3"><FilterProducts /></v-col>
      <v-col cols="9"
        ><ProductsList :products="products" />
        <v-pagination
          circle
          color="#211F1C"
          class="mt-6 mb-10"
          v-model="params.page"
          :length="totalPages"
          @input="changePage"
        ></v-pagination
      ></v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>
