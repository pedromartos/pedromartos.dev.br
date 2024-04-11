import './assets/main.scss';

import OneSignalVuePlugin from '@onesignal/onesignal-vue3';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(OneSignalVuePlugin, {
  appId: '34843346-f489-45e2-8292-6e24897b6aa6',
});

app.mount('#app');
