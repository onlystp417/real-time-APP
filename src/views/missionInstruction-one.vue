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

<style lang="scss">
.mission-instruction-card {
  width: 360px;
  margin: auto;
  padding-top: 136px;
  .card {
    background: $white;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px;
    padding: 15px 30px 21px 30px;
    margin-bottom: 48px;
    h3 {
      margin-bottom: 15px;
      @include fontstyle(regular, 26px, 1.5, $font, #757575);
      text-align: center;
    }
    p {
      padding-left: 34px;
      margin-top: 10px;
      @include fontstyle(regular, 16px, 1.5, $font, #757575);
    }
    p + p {
      border-top: #707070 1px solid;
      padding-top: 10px;
    }
  }
}
</style>