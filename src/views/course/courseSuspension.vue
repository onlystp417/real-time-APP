<template>
  <div class="anousement">
    <div class="anousement-card">
      <h4>12/3停課一周</h4>
      <p>
        因老師12/4要出國參加國際會議，
        <br />11/13，11/20，11/27三週上課時各延長1小時
      </p>
    </div>
    <div class="anousement-button">
      <buttonPrimaryBig>了解</buttonPrimaryBig>
    </div>
  </div>
</template>

<script>
import buttonPrimaryBig from "@/components/buttonPrimaryBig.vue";
export default {
  components: {
    buttonPrimaryBig
  }
};
</script>

<style lang="scss" scoped>
.anousement {
  &-card {
    background-color: #fff;
    padding: 14px 16px;
    box-shadow: 0px 3px 6px #00000029;
  }
  h4 {
    margin-bottom: 13px;
    @include fontstyle(500, 24px, 1.2, $font, #474747);
  }
  p {
    height: 96px;
    @include fontstyle(300, 16px, 24px, $font, #474747);
  }
  &-button {
    margin-top: 54px;
    text-align: center;
  }
}

</style>