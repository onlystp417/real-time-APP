export default {
  name: state => state.user.name,
  missionLevel: state => state.user.missionLevel,
  missionLevelDisplay: state => state.user.missionLevel + 1,
  chineseMissionLevel: state => {
    return state.user.missionLevel.toLocaleString("zh-u-nu-hanidec");
  },
  chineseMissionLevelDisplay: state => {
    return (state.user.missionLevel + 1).toLocaleString("zh-u-nu-hanidec");
  },
  setGenderAbbreviation: state => {
    return state.user.gender === "male" ? "M" : "F";
  },
  userSymbol: (state, getters) => {
    return getters.setGenderAbbreviation + (state.user.id + 1).toString();
  },
  missionState: state => {
    return state.user.missionState;
  }
};
