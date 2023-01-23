export const state = () => ({
  cart:[] as []
})

export const getters = {
  getCart: (state: any): boolean => state.cart,

}

export const mutations = {
  setCart: (state: any, payload: any) => state.cart = payload,
}

export const actions = {
  async getCart({commit}: any, payload: any) {
    try {
      const { data }  = await this.$axios.$get('/cart')
      commit("setCart", data)
    } catch (e: any) {
      console.log(e)
    }
  }
}