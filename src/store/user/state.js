export default {
  id: null,
  gender: null,
  name: null,
  // 各任務完成的狀態，true 代表完成、false 代表未完成。
  missionState: [false, false, false, false],
  // 目前任務關卡
  missionLevel: null,
  // 目前任務深淺別
  missionDepth: null,
  // 目前任務關卡小節
  missionLevelDetail: null,
  // 目前任務關卡個小節時間、完成狀態，共有四關。
  missionLevelState: [
    [
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      }
    ],
    [
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      }
    ],
    [
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      }
    ],
    [
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      },
      {
        finish: false,
        startTime: null,
        endTime: null
      }
    ]
  ]
};
