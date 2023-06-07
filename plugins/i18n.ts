import { createI18n } from "vue-i18n";

const i18nInstance = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      hoge: "hogehoge",
    },
  },
});

export const i18n = i18nInstance.global;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18nInstance);
  nuxtApp.i18n = i18n;
});
