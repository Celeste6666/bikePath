import '@/scss/main.scss';
import * as bootstrap from 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircle,
  faSearch,
  faMapMarkedAlt,
  faBicycle,
  faUser,
  faLocationArrow,
  faCamera,
  faUtensils,
  faExpand,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import 'leaflet/dist/leaflet.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faCircle,
  faSearch,
  faMapMarkedAlt,
  faBicycle,
  faUser,
  faLocationArrow,
  faCamera,
  faUtensils,
  faExpand,
);

createApp(App)
  .use(bootstrap)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
