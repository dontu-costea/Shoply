<script src="./index.ts"></script>

<template>
  <v-snackbar
    :value="$store.getters['modules/popup/getShowPopup']"
    @input="$store.dispatch('modules/popup/hidePopup')"
    :right="$store.getters['modules/popup/getRight']"
    :top="$store.getters['modules/popup/getTop']"
    :color="$store.getters['modules/popup/getColor']"
    timeout="1800"
  >
    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
      <div :style="{ alignSelf: 'center' }">
        {{ $store.getters['modules/popup/getMessage'] }}
      </div>
      <div>
        <v-btn
          @click="$store.dispatch('modules/popup/hidePopup')"
          color="white"
          text
          :style="{ fontFamily: 'Arial' }"
        >
          Close
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<style scoped lang="scss"></style>
