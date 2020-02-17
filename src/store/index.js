import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getter";
import mutations from "./mutation";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations
});
