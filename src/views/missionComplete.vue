<template>
  <section class="missionComplete">
    <h2 class="missionComplete-title">任務{{ missionLevelChinese }}完成！</h2>
    <section class="missionComplete-card">
      <h3 class="card-title">
        <span>編號：{{ userID }}</span>{{ userName }}
      </h3>
      <p class="card-text" v-for="(item, index) in messionMessage" :key="index">
        任務{{ missionLevel }}-{{ index }}：{{ item.minute }}分{{item.second}}秒
      </p>
    </section>
    <div class="missionComplete-button">
      <buttonPrimarySmall>完成</buttonPrimarySmall>
    </div>
  </section>
</template>

<script>
import buttonPrimarySmall from "@/components/buttonPrimarySmall.vue";
export default {
  components: {
    buttonPrimarySmall
  },
  computed: {
    missionLevelChinese() {
      return this.$store.getters.chineseMissionLevel;
    },
    missionLevel() {
      return this.$store.state.user.missionLevel;
    },
    userID() {
      return this.$store.getters.setUserSymbol;
    },
    userName() {
      return this.$store.state.user.name;
    },
    messionMessage() {
      return this.$store.getters.setMissionTime.map(value => {
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
  }
};
</script>

<style lang="scss" scoped>
.missionComplete {
  width: 360px;
  padding-top: 111px;
  margin: 0 auto;
  &-title {
    margin-bottom: 18px;
    text-align: center;
    @include fontstyle(900, 26px, 1.15, $font, #757575);
  }
  &-card {
    background-color: $white;
    border-radius: 13px;
    padding: 26px 37px 34px 37px;
    .card {
      &-title {
        text-align: center;
        @include fontstyle(900, 20px, 1.15, $font, #757575);
        margin-bottom: 23px;
        span:first-child {
          margin-right: 12px;
        }
      }
      &-text {
        text-align: center;
        @include fontstyle(700, 16px, 2, $font, #757575);
      }
    }
  }
  &-button {
    margin: 42px auto 0px auto;
  }
}
</style>
