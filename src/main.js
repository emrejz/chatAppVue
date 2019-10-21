import Vue from "vue";
import App from "./App.vue";
import dotenv from "dotenv";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
dotenv.config();
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
