import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GlobalComponents from "./includes/_globals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Create Vue instance
const app = createApp(App);

library.add(faGithub, faLinkedin);

app.use(store);
app.use(router);
app.use(GlobalComponents);

app.component("FontAwesomeIcon", FontAwesomeIcon);

// Mount Vue instance
app.mount("#app");
