export default {
  setGender: (state, playload) => {
    if (playload.index % 24 < 12) state.gender = "female";
    else if (12 <= playload.index % 24) state.gender = "male";
  },
  setId: (state, playload) => {
    state.id = playload.index;
  },
  setMissionDepth: (state, playload) => {
    state.missionDepth = playload.level;
  },
  setMissionLevel: (state, playload) => {
    state.missionLevel = playload;
    Object.assign({}, state.missionLevel);
  },
  setUserName: (state, playload) => {
    state.name = playload;
  },
  setMissionLevelState: (state, playload) => {
    state.missionLevelState[state.missionLevel][state.missionLevelDetail][
      playload.missionTime
    ] = playload.missionDate;
  },
  setMissionLevelDetail: (state, playload) => {
    state.missionLevelDetail = playload;
  },
  setJitterSeconds: (state, playload) => {
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
  }
};
