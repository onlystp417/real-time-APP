export default {
  setMissionLevel: (state, payload) => {
    state.user.missionLevel = payload.level;
  },
  setUserName: (state, playload) => {
    state.user.name = playload;
  },
  // setMissionTime: (state, playload) => {
  //   return state.user.missionLevelState
  //     .find((value, index) => index === state.user.missionLevel)
  //     .map(
  //       value => (value.endTime.getTime() - value.startTime.getTime()) / 1000
  //     );
  // },
  // messionMessage: (state, getters) => {
  //   return getters.setMissionTime.map(value => {
  //     let time = {
  //       second: value % 60,
  //       minute: (value - (value % 60)) / 60
  //     };

  //     let unitDigit = /^\b(?=\d$)/;
  //     time.second = time.second.toString().replace(unitDigit, "0");
  //     time.minute = time.minute.toString().replace(unitDigit, "0");

  //     return time;
  //   });
  // }
};
