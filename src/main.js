import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引用 moment.js 函數使用
const moment = require("moment");
require("moment/locale/zh-cn");

Vue.use(require("vue-moment"), {
  moment
});

new Vue({
  created() {
    this.$store.commit("getMissionStoreDepthData");
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
