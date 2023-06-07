import { defineNuxtPlugin } from "#app";
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
});

const actions = actionTree(
  { state, getters, mutations },
  {
    async resetEmail({ commit }) {
      console.log(this.app.i18n);

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

const plugin = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  nuxtApp.vueApp.config.globalProperties.$accessor = accessor;

  // Nuxt v2との互換性のためのcontext注入
  // https://github.com/nuxt/nuxt/blob/d4b9e4b0553bcd617ecbc0b8b76871070b347fcb/packages/vue-app/template/index.js#L164-L165
  store.app = nuxtApp.vueApp.$nuxt;

  return {
    provide: {
      store,
    },
  };
});

export default plugin;
