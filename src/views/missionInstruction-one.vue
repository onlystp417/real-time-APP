<template>
  <div class="mission-instruction mission-instruction-card">
    <div class="card instruction-card-space instruction-card-font">
      <h3>任務一</h3>
      <div>
        <p>1.感受到振動後拿起手機</p>
        <p>2.使用點名功能簽到</p>
        <p>3.觀看本堂課的課程資訊</p>
        <p>4.傳送「課程順暢」文字訊息給老師</p>
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
</style>