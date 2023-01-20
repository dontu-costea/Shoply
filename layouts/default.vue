<script lang="ts">
export default {
  name: 'DefaultLayout',
}
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>
