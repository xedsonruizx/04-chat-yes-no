/// <reference types="vite/client" />
// ... existing code ...
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// ... existing code ...