import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// let Nuxt worry about the CSS
config.autoAddCss = false;

library.add(faGithub, faLinkedin);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
