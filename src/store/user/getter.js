export default {
  name: state => state.name,
  missionCurrentLevel: state => {
    // 邏輯需要簡化，待修
    let missionLevel = state.missionLevelTime;
    for (let i = missionLevel.length - 1; i >= 0; i--) {
      for (let j = missionLevel[i].length - 1; j >= 0; j--) {
        if (missionLevel[i][j].endTime && missionLevel[i].length - 1 === j)
          return { level: i + 1, section: 0 };
        if (missionLevel[i][j].startTime) return { level: i, section: j };
      }
    }
    return { level: 0, section: 0 };
  },
  missionLevelState: (state, getters) => {
    // 試著跟 time 連結
    return state.missionState.map((value, index) => {
      if(index < getters.missionCurrentLevel.level) return true
      else return false
    })
  },
  serGenderAbbreviative: state => (state.gender === "male" ? "M" : "F"),
  missionLevelTime: state => state.missionLevelTime[state.missionLevel],
  missionCurrentCompleteLevel: state => state.missionCurrentCompleteLevel,
  missionDepth: state => state.missionDepth,
  userSymbol: (state, getters) =>
    getters.serGenderAbbreviative + (state.id + 1).toString(),
  missionState: state => state.missionState,
  setMissionCurrentTime: (state, getters) => level => {
    return state.missionLevelTime
      .find((value, index) => index === level)
      .map(
        value => (value.endTime.getTime() - value.startTime.getTime()) / 1000
      )
      .map(value => {
        let time = {
          second: value % 60,
          minute: (value - (value % 60)) / 60
        };
        let unitDigit = /^\b(?=\d$)/;
        time.second = time.second.toString().replace(unitDigit, "0");
        time.minute = time.minute.toString().replace(unitDigit, "0");
        return time;
      });
  }
};
