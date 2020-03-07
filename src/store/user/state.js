export default {
  id: null,
  gender: null,
  name: null,
  // 各任務完成的狀態，true 代表完成、false 代表未完成。
  missionState: [false, false, false, false],
  // 目前任務深淺別
  missionDepth: null,
  // 目前任務關卡
  missionLevel: 0,
  // 目前任務關卡小節
  missionSection: 0,
  // 目前任務關卡個小節時間、完成狀態，共有四關。
  jitterSeconds: { jitterSeconds: null, stopSeconds: null },
  missionCurrentCompleteLevel: null,
  missionLevelTime: [
    [
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      }
    ],
    [
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      }
    ],
    [
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      }
    ],
    [
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      },
      {
        startTime: null,
        endTime: null
      }
    ]
  ]
};
