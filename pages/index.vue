<template>
  <div>
    <MainBanner />
    <Partners />
    <MainProducts />
    <Benefits />
    <CustomersReview />
    <Popup />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { LayoutTypes } from '~/ts/enum'

@Component({
  layout: LayoutTypes.Default,
})
export default class extends Vue {}
</script>
