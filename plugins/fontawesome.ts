import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Prevent automatic CSS injection
config.autoAddCss = false

// Add only the icons you need
library.add(faGithub, faLinkedin)

export default defineNuxtPlugin((nuxtApp) => {
  // Register the component with the exact name you use in templates
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
