<template>
  <section class="missionLevel">
    <div
      class="missionLevel-card"
      v-for="(item, index) in $store.getters.missionLevelState"
      :key="index"
    >
      <h3 class="missionLevel-title">任務{{ index | $_indexChineseDisplay }}</h3>
      <buttonPrimary @click="nextPage(index)" :class="{ 'finished' : item }">
        {{
        item ? "已完成" : "開始"
        }}
      </buttonPrimary>
    </div>
  </section>
</template>

<script>
import mixin from "@/mixins/mixin";
import buttonPrimary from "@/components/buttonPrimary.vue";

export default {
  mixins: [mixin],
  methods: {
    nextPage(index) {
      if (index === this.$store.getters.missionCurrentLevel.level) {
        this.$router.push({ name: "missionInstruction" });
        return;
      }
      // 跳轉警告功能到下個路由
      if (index > this.$store.getters.missionCurrentLevel.level) {
        alert("請依序完成任務！");
        return;
      }
      // 跳轉路由到完成任務的關卡
      if (index < this.$store.getters.missionCurrentLevel.level) {
        this.$store.commit("setMissionCurrentCompleteLevel", index);
        this.$router.push({ name: "missionComplete" });
      }
    }
  },
  components: {
    buttonPrimary
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
    }
  }
  &-title {
    @include fontstyle(500, 26px, 1.34, $font, #757575);
    margin-bottom: 9px;
    text-align: center;
  }
}
</style>
