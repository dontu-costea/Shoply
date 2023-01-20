<script src="./index.ts"></script>

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
