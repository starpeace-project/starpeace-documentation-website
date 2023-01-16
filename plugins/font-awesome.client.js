import { library } from '@fortawesome/fontawesome-svg-core';

import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as fab from '@fortawesome/free-brands-svg-icons';

library.add(far.faQuestionCircle);
library.add(fas.faAngleDown, fas.faAngleRight, fas.faAngleUp, fas.faFlask, fas.faSearch, fas.faUserSecret, fas.faUserTie);
library.add(fab.faDiscord, fab.faGithub, fab.faTwitter);


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
