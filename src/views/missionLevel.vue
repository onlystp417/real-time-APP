<template>
  <div class="mission-level content-area">
    <div>
      <h3>任務一</h3>
      <buttonPrimarySmall class="finished">已完成</buttonPrimarySmall>
    </div>
    <div>
      <h3>任務二</h3>
      <buttonPrimarySmall>開始</buttonPrimarySmall>
    </div>
    <div>
      <h3>任務三</h3>
      <buttonPrimarySmall>開始</buttonPrimarySmall>
    </div>
    <div>
      <h3>任務四</h3>
      <buttonPrimarySmall>開始</buttonPrimarySmall>
    </div>
  </div>
</template>

<script>
import buttonPrimarySmall from "@/components/buttonPrimarySmall.vue";
export default {
  components: {
    buttonPrimarySmall
  }
};
</script>

<style lang="scss" scoped>
.mission-level {
  padding-top: 9vh;
  padding-bottom: 40px;
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

