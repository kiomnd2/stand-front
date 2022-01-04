import Vue from 'vue';
import Vuetify from './plugins/vuetify';
import App from './App';
import router from './router';
import store from './store';

new Vue({
  router,
  store,
  Vuetify,
  render: (h) => h(App),
}).$mount('#app');
