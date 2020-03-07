export default {
  SET_GENDER: (state, playload) => {
    if (playload.index % 24 < 12) state.gender = "female";
    else if (12 <= playload.index % 24) state.gender = "male";
  },
  SET_ID: (state, playload) => {
    state.id = playload.index;
  },
  SET_MISSIONDEPTH: (state, playload) => {
    state.missionDepth = playload.level;
  },
  SET_MISSIONLEVEL: (state, playload) => {
    state.missionLevel = playload;
    Object.assign({}, state.missionLevel);
  },
  SET_USERNAME: (state, playload) => {
    state.name = playload;
  },
  SET_MISSIONLEVELTIME: (state, playload) => {
    state.missionLevelTime[playload.level][playload.section][playload.missionTime] = playload.missionDate;
  },
  SET_MISSIONLEVELDetail: (state, playload) => {
    state.missionSection = playload;
  },
  SET_JITTERSECONDS: (state, playload) => {
    console.log(playload);
    if (playload.index / 24 <= 1) {
      state.jitterSeconds = { jitterSeconds: 200, stopSeconds: 200 };
      return;
    } else if (1 < playload.index / 24 && playload.index / 24 <= 2) {
      state.jitterSeconds = { jitterSeconds: 200, stopSeconds: 600 };
      return;
    } else {
      state.jitterSeconds = { jitterSeconds: 600, stopSeconds: 200 };
      return;
    }
  },
  setMissionCurrentCompleteLevel: (state, playload) => {
    state.missionCurrentCompleteLevel = playload;
  }
};
