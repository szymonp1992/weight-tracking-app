import { createApp } from "vue";
import App from "./App.vue";

// Vue Router
import router from "./router";

// Bootstrap

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

const app = createApp(App);

app.use(router);
app.use(bootstrap);

app.mount("#app");
