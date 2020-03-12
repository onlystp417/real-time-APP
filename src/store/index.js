import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/user/index";
import usersComplete from "@/store/userComplete/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    usersComplete
  },
  mutations: {
    // 儲存裡面的資料
    storeCurrentData: (state, playload) => {
      if (playload === "shallow") {
        state.usersComplete.usersShallowData.splice(state.user.id, 1, {
          id: state.user.id,
          gender: state.user.gender,
          name: state.user.name,
          missionLevelTime: state.user.missionLevelTime,
          missionCompleteLevel: state.user.missionCompleteLevel
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
            missionLevelTime: state.user.missionLevelTime,
            missionCompleteLevel: state.user.missionCompleteLevel
        });
        state.usersComplete.usersComplete.deep.splice(state.user.id, 1, true);
      }
    },
    setCurrentUser: (state, playload) => {
      if( playload.depth === 'shallow' ){
        let { id, gender, name, missionLevelTime, missionCompleteLevel } = state.usersComplete.usersShallowData[playload.index]
        state.user.id = id;
        state.user.gender = gender;
        state.user.name = name;
        state.user.missionLevelTime = missionLevelTime;
        state.user.missionCompleteLevel = missionCompleteLevel;
      }
      if( playload.depth === 'deep' ){
        let { id, gender, name, missionLevelTime } = state.usersComplete.usersDeepData[playload.index]
        state.user.id = id;
        state.user.gender = gender;
        state.user.name = name;
        state.user.missionLevelTime = missionLevelTime;
        state.user.missionCompleteLevel = missionCompleteLevel;
      }
    }
  }
});
