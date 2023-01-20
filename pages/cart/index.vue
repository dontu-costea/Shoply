<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ middleware: ['cart'] })
export default class Cart extends Vue {}
</script>

<template>
  <v-container>
    <PagesBar :active-page="'My Cart'" />
    <CartProducts />
  </v-container>
</template>
