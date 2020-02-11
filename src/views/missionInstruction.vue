<template>
  <div class="mission-instruction mission-instruction-card">
    <div class="card instruction-card-space instruction-card-font">
      <h3>任務{{ missionLevelChinese }}</h3>
      <p v-for="item in missionLevelMessage">{{ item }}</p>
    </div>
    <buttonPrimarySmall @click="$router.push({name: 'rollcall'})">開始</buttonPrimarySmall>
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
          "2.回答第一題，選擇A選項\n\r3.說出答題是否正確",
          "4.找到討論區的「邊緣運算」文章\r\n5.在「邊緣運算」文章中 新增留言「雲端運算」",
          "6.觀看本帳號的最近一次的點名紀錄"
        ],
        [
          "1.感受到振動後拿起手機",
          "2.回答第二題，選擇B選項\r\n3.說出答題是否正確",
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
    missionLevelChinese() {
      return this.$store.getters.chineseMissionLevel;
    },
    missionLevel() {
      return this.$store.state.user.missionLevel;
    },
    missionLevelMessage() {
      return this.messionMessage.find(
        (value, index) => index === this.missionLevel - 1
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>