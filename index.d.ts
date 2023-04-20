import { accessor } from "./plugins/vuex";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $accessor: typeof accessor;
  }
}
