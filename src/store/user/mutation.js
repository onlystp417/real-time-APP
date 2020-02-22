export default {
  setGender: (state, playload) => {
    if (playload.index % 24 < 12) state.gender = "female";
    if (12 <= playload.index % 24) state.gender = "male";
  },
  setId: (state, playload) => {
    state.id = playload.index;
  },
  setMissionDepth: (state, playload) => {
    state.missionDepth = playload.level;
  },
  setMissionLevel: (state, payload) => {
    state.missionLevel = payload;
    Object.assign({}, state.missionLevel)
  },
  setUserName: (state, playload) => {
    state.name = playload;
  },
  setMissionTime: (state, playload) => {
    state.missionLevelState
      .find((value, index) => index === state.missionLevel)
      .map(
        value => (value.endTime.getTime() - value.startTime.getTime()) / 1000
      );
  },
  setmissionUserState: (state, playload) => {
    state.complete.usersComplete[playload] = !state.complete.usersComplete[
      playload
    ];
    state.complete.usersComplete = [...state.complete.usersComplete];
  },
  messionMessage: (state, getters) => {
    getters.setMissionTime.map(value => {
      let time = {
        second: value % 60,
        minute: (value - (value % 60)) / 60
      };
      let unitDigit = /^\b(?=\d$)/;
      time.second = time.second.toString().replace(unitDigit, "0");
      time.minute = time.minute.toString().replace(unitDigit, "0");
      return time;
    });
  }
};
