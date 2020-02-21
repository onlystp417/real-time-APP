import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/user/index";
import usersComplete from "@/store/userComplete/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    // 儲存資料分為兩組：
    // user 負責存取任務中的資料。
    // userComplete 負責存取任務完成，並儲存到 localStorage 中的資料。
    user: user,
    usersComplete: usersComplete
  }
});