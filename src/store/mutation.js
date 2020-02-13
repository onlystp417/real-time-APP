export default {
  setMissionLevel: (state, payload) => {
    state.user.missionLevel = payload.level;
  }
};
