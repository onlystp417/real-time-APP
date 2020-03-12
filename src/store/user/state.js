export default {
  id: null,
  gender: null,
  name: null,
  // 目前任務深淺別
  missionDepth: null,
  // 目前完成任務關卡
  missionCompleteLevel: { level: 0, section: 0 },
  missionCompleteLevelCache: null,
  // 目前任務關卡個小節時間、完成狀態，共有四關。
  jitterSeconds: { jitterSeconds: null, stopSeconds: null },
  missionLevelTime: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]
};
