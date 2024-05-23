/* eslint-disable */
declare module "*.vue" {
  import Vue, { type DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
