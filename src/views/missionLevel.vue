<template>
  <section class="missionLevel">
    <div class="missionLevel-card">
      <h3 class="missionLevel-title">任務一</h3>
      <buttonPrimary @click="$router.push({name: 'missionInstruction'})" class="finished">已完成</buttonPrimary>
    </div>
    <div class="missionLevel-card">
      <h3 class="missionLevel-title">任務二</h3>
      <buttonPrimary>開始</buttonPrimary>
    </div>
    <div class="missionLevel-card">
      <h3 class="missionLevel-title">任務三</h3>
      <buttonPrimary>開始</buttonPrimary>
    </div>
    <div class="missionLevel-card">
      <h3 class="missionLevel-title">任務四</h3>
      <buttonPrimary>開始</buttonPrimary>
    </div>
  </section>
</template>

<script>
import buttonPrimary from "@/components/buttonPrimary.vue";
export default {
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
    padding: 10px 50px 16px 50px;
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

