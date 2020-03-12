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
  clearMissionStoreDepthData: state => {
    // 清除所有 localStorage 中的資料。
    localStorage.clear();
  }
};
