import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  cart:[] as []
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getCart: (state: any): boolean => state.cart,

}

export const mutations: MutationTree<RootState> = {
  setCart: (state: any, payload: any) => state.cart = payload,
}

export const actions: ActionTree<RootState, RootState> = {
  async getCart({commit}: any, payload: any) {
    try {
      const { data }  = await this.$axios.$get('/cart')
      commit("setCart", data)
    } catch (e: any) {
      console.log(e)
    }
  }
}