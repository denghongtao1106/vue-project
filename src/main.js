import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "./plugins/element.js";
// import "element-ui/lib/theme-chalk/index.css";

import "@/theme/element-variables.scss";
import store from "./store";

// Vue.use(Icon);
// import dialog from "@/components/index";

Vue.config.productionTip = false;

// Vue.use(dialog);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
