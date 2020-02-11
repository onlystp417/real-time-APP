import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    compelete: [],
    user: {
      id: 23,
      gender: "male",
      name: "黃庭偉",
      missionState: [false, false, false, false],
      missionLevel: 2,
      missionLevelState: [
        [
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          }
        ],
        [
          {
            finish: true,
            startTime: new Date(2020, 2, 1, 1, 10),
            endTime: new Date(2020, 2, 1, 1, 13)
          },
          {
            finish: true,
            startTime: new Date(2020, 2, 1, 1, 18),
            endTime: new Date(2020, 2, 1, 1, 33)
          },
          {
            finish: false,
            startTime: new Date(2020, 2, 1, 1, 36),
            endTime: new Date(2020, 2, 1, 1, 37)
          },
          {
            finish: false,
            startTime: new Date(2020, 2, 1, 1, 44),
            endTime: new Date(2020, 2, 1, 1, 54)
          }
        ],
        [
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          }
        ],
        [
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          },
          {
            finish: false,
            startTime: null,
            endTime: null
          }
        ]
      ]
    }
  },
  getters: {
    chineseMissionLevel: state =>
      state.user.missionLevel.toLocaleString("zh-u-nu-hanidec"),
    setGenderAbbreviation: state => state.user.gender === "male" ? "M" : "F",
    setUserSymbol: (state, getters) =>
      getters.setGenderAbbreviation + state.user.id.toString(),
    setMissionTime: state => {
      return state.user.missionLevelState
        .find((value, index) => index === state.user.missionLevel - 1)
        .map(
          value => (value.endTime.getTime() - value.startTime.getTime()) / 1000
        );
    }
  },
  mutations: {
    setMissionLevel: (state, payload) => {
      state.user.missionLevel = payload.level
    }
  },
  actions: {},
  modules: {}
});
