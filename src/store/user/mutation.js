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
  setMissionLevelState: (state, playload) => {
    state.missionLevelState[state.missionLevel][state.missionLevelDetail][playload.missionTime] = playload.missionDate
  },
  setMissionLevelDetail: (state, playload) => {
    state.missionLevelDetail = playload
  }
};
