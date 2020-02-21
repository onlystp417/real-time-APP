export default {
  // 設置任務完成狀態
  setMissionUserState: (state, playload) => {
    if (playload.level === "shallow") {
      state.usersComplete.shallow[playload.index] = !state.usersComplete.shallow[playload.index];
      state.usersComplete.shallow = [...state.usersComplete.shallow];
    }
    if (playload.level === "deep") {
      state.usersComplete.deep[playload.index] = !state.usersComplete.deep[playload.index];
      state.usersComplete.deep = [...state.usersComplete.deep];
    }
  }
};
