<template>
  <div class="anousement">
    <div class="anousement-card">
      <h4>下周作業</h4>
      <p>下周作業為顧客旅程地圖一張</p>
    </div>
    <div class="anousement-button">
      <buttonQuinary>了解</buttonQuinary>
    </div>
  </div>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
export default {
  components: {
    buttonQuinary
  }
};
</script>

<style lang="scss" scoped>
.anousement {
  > div:first-child {
    margin-top: 15px;
    padding: 14px 16px;
  }
  h4 {
    margin-bottom: 13px;
    @include fontstyle(500, 24px, 1.2, $font, #474747);
  }
  p {
    height: 96px;
    @include fontstyle(300, 16px, 24px, $font, #474747);
  }
  &-card {
    background: $white;
    box-shadow: 0px 3px 6px #00000029;
  }
  &-button {
    text-align: center;
    margin-top: 54px;
  }
}
</style>