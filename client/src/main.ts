import { createApp } from "vue";
import App from "./App.vue";
import VueSDKPlugin from "./my-sdk-plugin";

const app = createApp(App);

// Utilisez le plugin avec la configuration de votre SDK
app.use(MySDKPlugin, {
  apiKey: "your_api_key",
  // Autres options de configuration...
});

app.mount("#app");
