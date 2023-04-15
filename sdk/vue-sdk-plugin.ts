import { App } from "vue";
import { VueSDK } from "./vue-sdk";

const VueSDKPlugin = {
  install(app: App, options: any): void {
    const vueSDKInstance = new VueSDK(options);

    app.config.globalProperties.$vueSDK = vueSDKInstance;
    app.provide("$vueSDK", vueSDKInstance);
  },
};

export default VueSDKPlugin;
