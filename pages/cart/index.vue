<script lang="ts">
export default {
  name: 'Cart',

  middleware: 'cart',
}
</script>

<template>
  <v-container>
    <PagesBar :active-page="'My Cart'" />
    <CartProducts />
  </v-container>
</template>

<style scoped lang="scss"></style>
