<template>
  <div class="missionComplete-container">
    <h2 class="missionComplete-title">任務{{ missionLevelChinese }}完成！</h2>
    <section class="missionComplete-card">
      <h3 class="card-title">
        <span>編號：{{ userID }}</span>
        <span>{{ userName }}</span>
      </h3>
      <div class="card-container">
        <p
          class="card-text"
          v-for="(item, index) in messionMessage"
          :key="index"
        >
          任務{{ missionLevel }}-{{ index }}：{{ item.minute }}分{{
            item.second
          }}秒
        </p>
      </div>
    </section>
    <div class="missionComplete-container-button">
      <buttonPrimarySmall>開始</buttonPrimarySmall>
    </div>
  </div>
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
          second: null,
          minute: null
        };
        time.second = (value % 60).toString().replace(/^\b(?=\d$)/, 0);
        time.minute = ((value - time.second) / 60)
          .toString()
          .replace(/^\b(?=\d$)/, 0);
        return time;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.missionComplete {
  &-container {
    width: 360px;
    padding-top: 111px;
    margin: 0 auto;
  }
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
      &-container {
        text-align: center;
      }
      &-title {
        text-align: center;
        @include fontstyle(900, 20px, 1.15, $font, #757575);
        margin-bottom: 23px;
        span:first-child {
          margin-right: 12px;
        }
      }
      &-text {
        @include fontstyle(700, 16px, 2, $font, #757575);
      }
    }
  }
  &-container-button {
    margin: 0 auto;
    margin-top: 42px;
  }
}
</style>
