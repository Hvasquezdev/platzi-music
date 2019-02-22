import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router';
import './registerServiceWorker'

//filters
import msToMn from '@/filters/ms-to-mn.js';

Vue.use(msToMn);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
