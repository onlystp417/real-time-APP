import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    compelete: [],
    user: {
      id: null,
      name: null,
      missionState: [false, false, false, false],
      missionLevel: null,
      missionLevelState: [
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
        {},
        {}
      ]
    },
    messionMessage: [
      [
        "1.感受到振動後拿起手機",
        "2.使用點名功能簽到",
        "3.觀看本堂課的課程資訊",
        "4.傳送「課程順暢」文字訊息給老師"
      ],
      [
        "1.感受到振動後拿起手機",
        "2.回答第一題，選擇A選項",
        "3.說出答題是否正確",
        "4.找到討論區的「邊緣運算」文章",
        "5.在「邊緣運算」文章中 新增留言「雲端運算」",
        "6.觀看本帳號的最近一次的點名紀錄"
      ],
      [
        "1.感受到振動後拿起手機",
        "2.回答第二題，選擇B選項",
        "3.說出答題是否正確",
        "4.查看本課程的出席率",
        "5.查看本課程的「12/3停課一周」公告"
      ],
      [
        "1.感受到振動後拿起手機",
        "2.使用私訊老師的功能",
        "3.以「我懂了」的選項回饋老師",
        "4.查看本課程的答題正確率",
        "5.觀看本課程的修課人數"
      ]
    ],
    isAddToLocalStorage: "false"
  },
  mutations: {},
  actions: {},
  modules: {}
});
