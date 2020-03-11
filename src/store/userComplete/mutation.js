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
  setMissionStoreDepthData: (state, playload) => {
    if (localStorage.getItem("shallow")) {
      console.log(
        "當 localStorage 中有 JSON 檔案，現在的 shallow 資料為" +
          localStorage.getItem("shallow")
      );
      state.usersComplete.shallow = JSON.parse(localStorage.getItem("shallow"));
    }
    if (localStorage.getItem("deep")) {
      console.log(
        "當 localStorage 中有 JSON 檔案，現在的 deep 資料為" +
          localStorage.getItem("deep")
      );
      state.usersComplete.deep = JSON.parse(localStorage.getItem("deep"));
    }
  },
  clearMissionStoreDepthData: (state) => {
    // 清除所有 localStorage 中的資料。
    localStorage.clear()
  }
};
