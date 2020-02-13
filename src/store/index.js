import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getter";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations: {
    setMissionLevel: (state, payload) => {
      state.user.missionLevel = payload.level;
    }
  }
});
