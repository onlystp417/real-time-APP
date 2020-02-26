export default {
  name: state => state.name,
  missionLevel: state => state.missionLevel,
  setGenderAbbreviation: state => {
    return state.gender === "male" ? "M" : "F";
  },
  missionLevelState: state => {
    return state.missionLevelState[state.missionLevel];
  },
  missionDepth: state => {
    return state.missionDepth;
  },
  userSymbol: (state, getters) => {
    return getters.setGenderAbbreviation + (state.id + 1).toString();
  },
  missionState: state => {
    return state.missionState;
  },
  setMissionCurrentTime: state => {
    return state.missionLevelState
      .find((value, index) => index === state.missionLevel)
      .map(
        value => (value.endTime.getTime() - value.startTime.getTime()) / 1000
      );
  },
  messionMessage: (state, getters) => {
    return getters.setMissionCurrentTime.map(value => {
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
