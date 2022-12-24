<script lang="ts">
export default {
  name: 'Login',

  props: {
    error: String,
  },

  layout: 'auth',

  data: () => ({}),

  methods: {},
}
</script>

<template>
  <Transition name="popup">
    <div class="popup">
      <v-btn
        @click="$emit('close')"
        class="popup__close"
        elevation="0"
        color="transparent"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <span>{{ error }}</span>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.popup {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: #eaeaea;
  width: 300px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: red;
  font-size: 18px;
  font-family: 'Loto';
  &__close {
    position: absolute;
    right: 0;
    top: 0;
  }
}
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
</style>
