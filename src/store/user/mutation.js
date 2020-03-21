export default {
  setGender: (state, playload) => {
    if (playload.index % 24 < 12) state.gender = "female";
    else if (12 <= playload.index % 24) state.gender = "male";
  },
  setID: (state, playload) => {
    state.id = playload.index;
  },
  setUserName: (state, playload) => {
    state.name = playload;
  },
  setMissionDepth: (state, playload) => {
    state.missionDepth = playload.level;
  },
  setMissionLevelTime: (state, playload) => {
    console.log(`現在任務計時：
    第${playload.level}關卡。
    第${playload.section}小節。
    時間為${new Date()}。`);
    state.missionLevelTime[playload.level][playload.section] = new Date();
  },
  setMissionCompleteLevel: (state, playload) => {
    state.missionCompleteLevel = {
      level: playload.level,
      section: playload.section
    };
  },
  setMissionCompleteLevelCache: (state, playload) => {
    state.missionCompleteLevelCache = playload;
  },
  setMissionCurrentLevel: (state, playload) => {
    state.missionCurrentLevel = {
      level: playload.level,
      section: playload.section
    };
  },
  setJitterSeconds: (state, playload) => {
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
  // 目前任務完成，跳轉回原頁面，清除內部快取資料。
  clearUserCacheData: state => {
    state.id = null;
    state.gender = null;
    state.name = null;
    state.missionCompleteLevel = { level: 0, section: 0 };
    state.missionCompleteLevelCache = 0;
    state.jitterSeconds = { jitterSeconds: null, stopSeconds: null };
    state.missionLevelTime = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];
  },
  setPageReturn : state => state.pageReturn = !state.pageReturn
};
