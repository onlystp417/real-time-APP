import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/user/index";
import usersComplete from "@/store/userComplete/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // 儲存資料分為兩組：
    // user 負責存取任務中的資料。
    // userComplete 負責存取任務完成，並儲存到 localStorage 中的資料。
    user: user,
    usersComplete: usersComplete
  },
  mutations: {
    // 儲存裡面的資料
    storeCurrentData: (state, playload) => {
      console.log(state.usersComplete.usersShallowData);
      console.log(state.user.id);
      if (playload === "shallow") {
        state.usersComplete.usersShallowData.splice(state.user.id, 1, {
          id: state.user.id,
          gender: state.user.gender,
          name: state.user.name,
          missionLevelTime: state.user.missionLevelTime
        });
        state.usersComplete.usersComplete.shallow.splice(
          state.user.id,
          1,
          true
        );
      }
      if (playload === "deep") {
        state.usersComplete.usersDeepData.splice(state.user.id, 1, {
          id: state.user.id,
          gender: state.user.gender,
          name: state.user.name,
          missionLevelTime: state.user.missionLevelTime
        });
        state.usersComplete.usersComplete.deep.splice(state.user.id, 1, true);
      }
    },
    setCurrentUser: (state, playload) => {
      state.user.id = state.usersComplete.id;
      state.user.gender = state.usersComplete.gender;
      state.user.name = state.usersComplete.name;
      state.user.missionLevelTime = state.usersComplete.missionLevelTime;
    }
  }
});
