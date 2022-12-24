<script lang="ts">
export default {
  name: 'Products',
}
</script>

<template>
  <v-container>
    <PagesBar :activePage="'Products'" />
    <v-row>
      <v-col cols="3" class="abc"><FilterProducts /></v-col>
      <v-col cols="9" class="abc"><ProductsList /></v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.abc {
  border: 1px solid red !important;
}
</style>
