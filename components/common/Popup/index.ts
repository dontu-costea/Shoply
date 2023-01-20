import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Popup extends Vue {
  beforeDestroy() {
    if (!this.$store.getters['modules/popup/getKeepPopup']) {
      this.$store.dispatch('modules/popup/hidePopup')
    } else {
      this.$store.dispatch('modules/popup/keepPopup', false)
    }
  }
}