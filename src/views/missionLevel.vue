<template>
  <section class="missionLevel">
    <div
      class="missionLevel-card"
      v-for="(item, index) in $store.getters.missionLevelState"
      :key="index"
    >
      <h3 class="missionLevel-title">任務{{ index | $_indexChineseDisplay }}</h3>
      <buttonPrimaryNoShadow
        @click="nextPage(index)"
        :class="{ finished: item }"
      >{{ item ? "已完成" : "開始" }}</buttonPrimaryNoShadow>
    </div>
  </section>
</template>

<script>
import mixin from "@/mixins/mixin";

// 新增的「沒有陰影」的 primaryButton」
import buttonPrimaryNoShadow from "@/components/buttonPrimaryNoShadow.vue";

export default {
  mixins: [mixin],
  mounted() {
    this.$store.commit("setPageReturn");
  },
  methods: {
    nextPage(index) {
      if (
        index === this.$store.state.user.missionCompleteLevel.level &&
        !this.$store.getters.missionLevelState.every(value => value)
      ) {
        this.$router.push({ name: "missionInstruction" });
        return;
      }
      // 跳轉警告功能到下個路由
      else if (index > this.$store.state.user.missionCompleteLevel.level) {
        alert("請依序完成任務！");
        return;
      }
      // 跳轉路由到完成任務的關卡
      else {
        this.$store.commit("setMissionCompleteLevelCache", index);
        this.$router.push({ name: "missionComplete" });
        return;
      }
    }
  },
  components: {
    buttonPrimaryNoShadow
  },
  destroyed() {
    this.$store.commit("setPageReturn");
  }
};
</script>

<style lang="scss" scoped>
.missionLevel {
  padding-top: 8.6vh;
  width: 80.5%;
  max-width: 475px;
  margin: auto;
  text-align: center;
  &-card {
    background: $white;
    margin-bottom: 21px;
    padding: 10px 0px 16px 0px;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px 0px;
    &:last-child {
      margin-bottom: 0;
      color: rgba(128, 32, 32, 0.6);
    }
  }
  &-title {
    @include fontstyle(700, 26px, 1.34, $font, #757575);
    margin-bottom: 9px;
    text-align: center;
  }
}
</style>
