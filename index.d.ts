import { NuxtApp } from "nuxt/dist/app/nuxt";
import { accessor } from "./plugins/vuex";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $accessor: typeof accessor;
  }
}

// Nuxt v2との互換性のための型定義
declare module "vuex/types/index" {
  interface Store<S> {
    app: NuxtApp;
  }
}
