export default {
  setMissionLevel: (state, payload) => {
    state.user.missionLevel = payload.level;
  },
  setUserName: (state, playload) => {
    state.user.name = playload;
  }
};
