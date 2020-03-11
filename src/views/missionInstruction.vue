<template>
  <div class="missionInstruction">
    <div class="missionInstruction-card">
      <h3>
        任務{{
        $store.getters.missionCurrentLevel.level | $_indexChineseDisplay
        }}
      </h3>
      <p v-for="(item, index) in missionLevelMessage" :key="index" v-html="item"></p>
    </div>
    <div class="missionInstruction-button">
      <buttonPrimary @click.prevent="nextPage">開始</buttonPrimary>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins/mixin";
import buttonPrimary from "@/components/buttonPrimary.vue";
export default {
  mixins: [mixin],
  components: {
    buttonPrimary
  },
  data: function() {
    return {
      messionMessage: [
        [
          "1.感受到振動後拿起手機",
          "2.使用點名功能簽到",
          "3.觀看本帳號在此課程的排名"
        ],
        [
          "1.感受到振動後拿起手機",
          "2.回答第一題，選擇A選項<br/>3.說出答題是否正確",
          "4.觀看本帳號的最近一次的點名紀錄"
        ],
        [
          "1.感受到振動後拿起手機",
          "2.回答第二題，選擇B選項<br/>3.說出答題是否正確",
          "4.查看本課程的出席率",
          "5.查看本課程的「12/3停課一周」公告"
        ],
        [
          "1.感受到振動後拿起手機",
          "2.使用私訊老師的功能<br/>3.以「我懂了」的選項回饋老師",
          "4.查看本課程的答題正確率",
          "5.觀看本課程的修課人數"
        ]
      ]
    };
  },
  computed: {
    missionLevelMessage() {
      return this.messionMessage.find(
        (value, index) =>
          index === this.$store.getters.missionCurrentLevel.level
      );
    }
  },
  methods: {
    nextPage() {
      this.$_setMissionStartTimer(
        this.$store.getters.missionCurrentLevel.level,
        this.$store.getters.missionCurrentLevel.section
      );
      this.setNextRouter();
    },
    setNextRouter() {
      this.$router.push({ name: "missionStart" });
    }
  }
};
</script>

<style lang="scss" scoped>
.missionInstruction {
  padding-top: 18.6vh;
  width: 87.5%;
  max-width: 495px;
  margin: auto;
  &-card {
    background: $white;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px;
    padding: 15px 30px 21px 30px;
    margin-bottom: 48px;
    h3 {
      @include fontstyle(500, 26px, 1.5, $font, #757575);
      margin-bottom: 15px;
      text-align: center;
    }
    p {
      @include fontstyle(400, 16px, 1.5, $font, #757575);
      padding-left: 34px;
      margin-top: 10px;
    }
    p + p {
      border-top: #707070 1px solid;
      padding-top: 10px;
    }
    pre {
      white-space: pre-wrap;
    }
  }
  &-button {
    text-align: center;
  }
}
</style>
