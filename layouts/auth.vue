<script lang="ts">
import Header from '@/components/common/navigation/Header.vue'

export default {
  name: 'Auth',

  components: {
    Header,
  },

  data: () => ({}),
}
</script>

<template>
  <v-app>
    <Header />
    <Nuxt />
  </v-app>
</template>
