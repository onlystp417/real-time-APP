<template>
  <div class="mission-level">
    <div>
      <h3>任務一</h3>
      <buttonPrimary class="finished">已完成</buttonPrimary>
    </div>
    <div>
      <h3>任務二</h3>
      <buttonPrimary>開始</buttonPrimary>
    </div>
    <div>
      <h3>任務三</h3>
      <buttonPrimary>開始</buttonPrimary>
    </div>
    <div>
      <h3>任務四</h3>
      <buttonPrimary>開始</buttonPrimary>
    </div>
  </div>
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
.mission-level {
  height: calc(100vh - 102px);
  padding-top: 63.5px - 22px;
  > div {
    background: $white;
    width: 331px;
    border-radius: 13px;
    margin: auto;
    margin-bottom: 21px;
    padding-top: 10px;
    padding-bottom: 16px;
    box-shadow: #00000029 0px 1px 3px 0px;
  }
  h3 {
    margin-bottom: 9px;
    font-family: "SF Pro Text", "SF Pro Text";
    font-size: 26px;
    text-align: center;
    color: #757575;
  }
  svg {
    width: 50px;
  }
}

.finished {
  background: $white;
  border: #bcbcbc 2px solid;
  color: #bcbcbc;
}
</style>

