import Vue from "vue";
import App from "./App.vue";
import dotenv from "dotenv";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from "./router";
import storeOpt from "./stories/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
dotenv.config();
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter(routes);
const store = new Vuex.Store(storeOpt);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
