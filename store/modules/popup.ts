import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  showPopup: false as Boolean,
  keepPopup: false as Boolean,
  params: {
    color: "" as String,
    message: "" as String,
    top: false as Boolean,
    right: true as Boolean
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getShowPopup: (state: any): boolean => state.showPopup,
  getKeepPopup: (state: any): boolean => state.keepPopup,
  getColor: (state: any): boolean => state.params.color,
  getMessage: (state: any): boolean => state.params.message,
  getTop: (state: any): boolean => state.params.top,
  getRight: (state: any): boolean => state.params.right,
}

export const mutations: MutationTree<RootState> = {
  keepPopup:(state: any, payload: Boolean) => state.keepPopup = payload,
  hide: (state: any) => state.showPopup = false,
  show (state: any, payload: any) { 
    state.showPopup = true;
    state.params = {...payload}
  }
}

export const actions: ActionTree<RootState, RootState> = {
  hidePopup: ({commit}: any) => commit("hide"),
  showPopup: ({commit}: any, payload: Object) => commit("show", payload),
  keepPopup: ({commit}: any, payload: Boolean) => commit('keepPopup', payload)
}