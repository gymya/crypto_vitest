import { createApp } from 'vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { Quasar, Dialog, Notify, Loading } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import quasarLang from 'quasar/lang/zh-TW';

import router from '@/router';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
    Loading,
  },
  config: {
    notify: {
      position: 'top',
    },
  },
  lang: quasarLang,
});
app.use(router);

app.mount('#app');
