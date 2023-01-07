import api from "@/api"

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
      const { data } = await api.cart().getCart()
      commit("setCart", data)
    } catch (e: any) {
      console.log(e)
    }
  }
}