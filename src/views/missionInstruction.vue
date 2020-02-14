<template>
  <div class="mission-instruction main-menu-placeholder content-area">
    <div class="mission-instruction-card">
      <div class="card instruction-card-space instruction-card-font">
        <h3>任務{{ $store.getters.chineseMissionLevel }}</h3>
        <p v-for="(item, index) in missionLevelMessage" :key="index" v-html="item"></p>
      </div>
    </div>
    <buttonPrimarySmall>開始</buttonPrimarySmall>
  </div>
</template>

<script>
import buttonPrimarySmall from "@/components/buttonPrimarySmall.vue";
export default {
  components: {
    buttonPrimarySmall
  },
  data: function() {
    return {
      messionMessage: [
        [
          "1.感受到振動後拿起手機",
          "2.使用點名功能簽到",
          "3.觀看本堂課的課程資訊",
          "4.傳送「課程順暢」文字訊息給老師"
        ],
        [
          "1.感受到振動後拿起手機",
          "2.回答第一題，選擇A選項<br/>3.說出答題是否正確",
          "4.找到討論區的「邊緣運算」文章<br/>5.在「邊緣運算」文章中<br/>   新增留言「雲端運算」",
          "6.觀看本帳號的最近一次的點名紀錄"
        ],
        [
          "1.感受到振動後拿起手機",
          "2.回答第二題，選擇B選項<br/>3.說出答題是否正確",
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
      ]
    };
  },
  computed: {
    missionLevelMessage() {
      return this.messionMessage.find(
        (value, index) => index === this.$store.getters.missionLevel - 1
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.mission-instruction {
  padding-top: 18.6vh;
}

.mission-instruction-card {
  width: 87.5%;
  max-width: 495px;
  margin: auto;
  .card {
    background: $white;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px;
    padding: 15px 30px 21px 30px;
    margin-bottom: 48px;
    h3 {
      margin-bottom: 15px;
      @include fontstyle(regular, 26px, 1.5, $font, #757575);
      text-align: center;
    }
    p {
      padding-left: 34px;
      margin-top: 10px;
      @include fontstyle(regular, 16px, 1.5, $font, #757575);
    }
    p + p {
      border-top: #707070 1px solid;
      padding-top: 10px;
    }
    pre {
      white-space: pre-wrap;
    }
  }
}
</style>