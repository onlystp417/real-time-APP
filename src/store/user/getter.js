export default {
  name: state => state.name,
  missionLevel: state => state.missionLevel,
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
