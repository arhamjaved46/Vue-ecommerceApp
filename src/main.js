import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueSimpleAlert from "vue-simple-alert";
import routes from "./router";
import store from "./store";

Vue.use(VueSimpleAlert);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
