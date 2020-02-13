export default {
  name: (state) => state.user.name,
  missionLevel: (state) => state.user.missionLevel,
  chineseMissionLevel: state => {
    return state.user.missionLevel.toLocaleString("zh-u-nu-hanidec");
  },
  setGenderAbbreviation: state => {
    return state.user.gender === "male" ? "M" : "F";
  },
  userSymbol: (state, getters) => {
    return getters.setGenderAbbreviation + state.user.id.toString();
  },
  setMissionTime: state => {
    return state.user.missionLevelState
      .find((value, index) => index === state.user.missionLevel - 1)
      .map(
        value => (value.endTime.getTime() - value.startTime.getTime()) / 1000
      );
  },
  messionMessage: (state, getters) => {
    return getters.setMissionTime.map(value => {
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
