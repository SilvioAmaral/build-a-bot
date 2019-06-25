import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Vue.directive('pin', pinDirective); // Example of how to declare global directives
// same syntax for filters: Vue.filter('name', x)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
