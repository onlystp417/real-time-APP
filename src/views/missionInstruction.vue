<template>
  <div class="missionInstruction">
    <div class="missionInstruction-card">
      <h3>
        任務{{
        $store.getters.missionCompleteLevel.level | $_indexChineseDisplay
        }}
      </h3>
      <p v-for="(item, index) in missionLevelMessage" :key="index" v-html="item"></p>
    </div>
    <div class="missionInstruction-button">
      <buttonPrimary @click.prevent="vibrate">開始</buttonPrimary>
    </div>
    <div class="blackview" v-if="blackview" @click="nextPage"></div>
  </div>
</template>

<script>
  import mixin from '@/mixins/mixin';
  import buttonPrimary from '@/components/buttonPrimary.vue';
  export default {
    mixins: [mixin],
    components: {
      buttonPrimary
    },
    mounted() {
      this.$store.commit('setPageReturn');
    },
    data: function() {
      return {
        messionMessage: [
          [
            '1.感受到振動後拿起手機',
            '2.使用點名功能簽到',
            '3.觀看本帳號在此課程的排名'
          ],
          [
            '1.感受到振動後拿起手機',
            '2.回答第一題，選擇A選項<br/>3.說出答題是否正確',
            '4.觀看本帳號的最近一次的點名紀錄'
          ],
          [
            '1.感受到振動後拿起手機',
            '2.回答第二題，選擇B選項<br/>3.說出答題是否正確',
            '4.查看本課程的出席率',
            '5.查看本課程的「12/3停課一周」公告'
          ],
          [
            '1.感受到振動後拿起手機',
            '2.使用私訊老師的功能<br/>3.以「我懂了」的選項回饋老師',
            '4.查看本課程的答題正確率',
            '5.觀看本課程的修課人數'
          ]
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
      ],
      blackview: false,
      vibrateData: true,
      intervalNumber: null
    };
  },
  computed: {
    missionLevelMessage() {
      return this.messionMessage.find(
        (value, index) =>
          index === this.$store.getters.missionCompleteLevel.level
      );
    }
  },
  methods: {
    nextPage() {
      this.setNextRouter();
      this.clearVibrate();
    },
    setNextRouter() {
      this.$router.push({ name: "missionStart" });
    },
    vibrate() {
      this.blackview = !this.blackview;
      window.navigator.vibrate = navigator.vibrate || navigator.webkitVibrate;
      this.$store.commit("setMissionLevelTime", {
        level: this.$store.getters.missionCompleteLevel.level,
        section: 0
      });
      let { jitterSeconds, stopSeconds } = this.$store.getters.jitterSeconds;
      if (window.navigator.vibrate) {
        this.intervalNumber = setInterval(
          () => window.navigator.vibrate([jitterSeconds, stopSeconds]),
          jitterSeconds + stopSeconds
        );
      }
    },
    methods: {
      nextPage() {
        this.setNextRouter();
        this.clearVibrate();
      },
      setNextRouter() {
        this.$router.push({ name: 'missionStart' });
      },
      vibrate() {
        this.blackview = !this.blackview;
        window.navigator.vibrate = navigator.vibrate || navigator.webkitVibrate;
        this.$store.commit('setMissionLevelTime', {
          level: this.$store.getters.missionCompleteLevel.level,
          section: 0
        });
        let { jitterSeconds, stopSeconds } = this.$store.getters.jitterSeconds;
        if (window.navigator.vibrate) {
          this.intervalNumber = setInterval(
            () => window.navigator.vibrate([jitterSeconds, stopSeconds]),
            jitterSeconds + stopSeconds
          );
        }
      },
      clearVibrate() {
        navigator.vibrate([]);
        clearInterval(this.intervalNumber);
        this.vibrateData = !this.vibrateData;
      }
    },
    destroyed() {
      this.$store.commit('setPageReturn');
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
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  &-card {
    background: $white;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px;
    padding: 15px 30px 21px 30px;
    margin-bottom: 48px;
    h3 {
      @include fontstyle(700, 26px, 1.5, $font, #757575);
      margin-bottom: 15px;
      text-align: center;
    }
    p {
      @include fontstyle(700, 16px, 1.5, $font, #757575);
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
  .blackview {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
  }
}
</style>
