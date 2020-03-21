export default {
  name: state => state.name,
  missionCurrentLevel: state => {
    return {
      level: state.missionCurrentLevel.level - 1,
      section: state.missionCurrentLevel.level - 1
    };
  },
  missionCompleteLevel: state => {
    return state.missionCompleteLevel;
  },
  missionCompleteLevelCache: state => {
    return state.missionCompleteLevelCache;
  },
  missionLevelState: (state, getters) => {
    return state.missionLevelTime.map(value => value.every(value => value));
  },
  jitterSeconds: state => state.jitterSeconds,
  serGenderAbbreviative: state => (state.gender === "male" ? "M" : "F"),
  missionDepth: state => state.missionDepth,
  userSymbol: (state, getters) =>
    getters.serGenderAbbreviative + (state.id + 1).toString(),
  setMissionCurrentTime: state => level => {
    // 另外設置一組物件，儲存時間。
    let timeCount = [];
    state.missionLevelTime
      .find((value, index) => index === level)
      .reduce((acc, cur, index) => {
        if (typeof cur !== "object") {
          acc = new Date(acc);
          cur = new Date(cur);
        }
        timeCount[index - 1] = (cur.getTime() - acc.getTime()) / 1000;
        return cur;
      });
    console.log(timeCount);
    return timeCount.map(value => {
      let time = {
        second: value % 60,
        minute: (value - (value % 60)) / 60
      };
      let unitDigit = /^\b(?=\d$)/;
      time.second = Math.ceil(time.second).toString().replace(unitDigit, "0");
      time.minute = Math.ceil(time.minute).toString().replace(unitDigit, "0");
      return time;
    });
  }
};
