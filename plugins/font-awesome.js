import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faQuestionCircle
} from '@fortawesome/free-regular-svg-icons'
import {
  faSearch,
  faUserSecret,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faQuestionCircle, faSearch, faUserSecret, faUserTie, faDiscord, faGithub)


import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
