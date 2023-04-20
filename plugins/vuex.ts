import { defineNuxtPlugin, Plugin } from "#app";
import { createStore } from "vuex";
import { useAccessor, getterTree, mutationTree, actionTree } from "typed-vuex";

const state = () => ({
  email: "",
});

const getters = getterTree(state, {
  email: (state) => state.email,
  fullEmail: (state) => state.email,
});

const mutations = mutationTree(state, {
  setEmail(state, newValue: string) {
    state.email = newValue;
  },

  initialiseStore() {
    console.log("initialised");
  },
});

const actions = actionTree(
  { state, getters, mutations },
  {
    async resetEmail({ commit }) {
      commit("setEmail", "a@a.com");
    },
  }
);

const storePattern = {
  state,
  mutations,
  actions,
};

const store = createStore(storePattern);

export const accessor = useAccessor(store, storePattern);

const plugin: Plugin = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  nuxtApp.vueApp.config.globalProperties.$accessor = accessor;

  return {
    provide: {
      store,
    },
  };
});

export default plugin;
