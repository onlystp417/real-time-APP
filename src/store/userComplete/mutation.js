export default {
  // 設置任務完成狀態
  setMissionUserState: (state, playload) => {
    if (playload.level === "shallow") {
      state.usersComplete.shallow[playload.index] = !state.usersComplete
        .shallow[playload.index];
      state.usersComplete.shallow = [...state.usersComplete.shallow];
    }
    if (playload.level === "deep") {
      state.usersComplete.deep[playload.index] = !state.usersComplete.deep[
        playload.index
      ];
      state.usersComplete.deep = [...state.usersComplete.deep];
    }
  },
  getMissionStoreDepthData: (state, playload) => {
    if (localStorage.getItem("shallow")) {
      state.usersComplete.shallow = JSON.parse(localStorage.getItem("shallow"));
      state.usersShallowData = JSON.parse(
        localStorage.getItem("usersShallowData")
      );
    }
    if (localStorage.getItem("deep")) {
      state.usersComplete.deep = JSON.parse(localStorage.getItem("deep"));
      state.usersDeepData = JSON.parse(localStorage.getItem("usersDeepData"));
    }
  },
  deleteData: (state, playload) => {
    if (playload.depth === "deep") {
      state.usersDeepData = Array(72).fill({
        id: null,
        gender: null,
        name: null,
        missionCompleteLevel: null,
        missionLevelTime: [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null, null],
          [null, null, null, null, null]
        ]
      });
      state.usersComplete.deep = Array(72).fill(false);
      localStorage.removeItem("deep", JSON.stringify(state.usersComplete.deep));
      localStorage.removeItem(
        "usersDeepData",
        JSON.stringify(state.usersDeepData)
      );
      Object.assign({}, state.usersDeepData);
    }
    if (playload.depth === "shallow") {
      state.usersShallowData = Array(72).fill({
        id: null,
        gender: null,
        name: null,
        missionCompleteLevel: null,
        missionLevelTime: [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null, null],
          [null, null, null, null, null]
        ]
      });
      state.usersComplete.shallow = Array(72).fill(false);
      localStorage.removeItem(
        "shallow",
        JSON.stringify(state.usersComplete.shallow)
      );
      localStorage.removeItem(
        "usersShallowData",
        JSON.stringify(state.usersShallowData)
      );
      Object.assign({}, state.usersShallowData);
    }
  }
};
