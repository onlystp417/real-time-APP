export default {
  name: state => state.name,
  missionLevel: state => state.missionLevel,
  missionLevelDisplay: state => state.missionLevel + 1,
  chineseMissionLevel: state => {
    return state.missionLevel.toLocaleString("zh-u-nu-hanidec");
  },
  chineseMissionLevelDisplay: state => {
    return (state.missionLevel + 1).toLocaleString("zh-u-nu-hanidec");
  },
  setGenderAbbreviation: state => {
    return state.gender === "male" ? "M" : "F";
  },
  missionDepth: state => {
    return state.missionDepth;
  },
  userSymbol: (state, getters) => {
    return getters.setGenderAbbreviation + (state.id + 1).toString();
  },
  missionState: state => {
    return state.missionState;
  }
};
