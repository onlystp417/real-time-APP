<template>
  <div class="mission-instruction mission-instruction-card">
    <div class="card">
      <h3>任務四</h3>
      <div>
        <p>1.感受到振動後拿起手機</p>
        <p>
          2.使用私訊老師的功能
          <br />3.以「我懂了」的選項回饋老師
        </p>
        <p>4.查看本課程的答題正確率</p>
        <p>5.觀看本課程的修課人數</p>
      </div>
    </div>
    <buttonPrimary>開始</buttonPrimary>
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
.mission-instruction {
  span {
    padding: 7px;
  }
}
</style>