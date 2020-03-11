import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引用 moment.js 函數使用
const moment = require("moment");
require("moment/locale/zh-cn");

Vue.use(require("vue-moment"), {
  moment
});

Vue.config.productionTip = false;

store.subscribe((mutation, state) => {
  // 儲存資料到本地端，一旦發生資料變動
	localStorage.setItem('shallow', JSON.stringify(state.usersComplete.usersComplete.shallow));
	localStorage.setItem('deep', JSON.stringify(state.usersComplete.usersComplete.deep));
	localStorage.setItem('usersShallowData', JSON.stringify(state.usersComplete.usersShallowData));
	localStorage.setItem('usersDeepData', JSON.stringify(state.usersComplete.usersDeepData));
})
console.log(store.state)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
