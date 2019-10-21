import Vue from "vue";
import App from "./App.vue";
import dotenv from "dotenv";
import VueRouter from "vue-router";
import routes from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
dotenv.config();
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter(routes);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
