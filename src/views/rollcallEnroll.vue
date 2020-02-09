<template>
  <div class="rollcall-enroll">
    <time class="rollcall-time">2020/1/5 13:28</time>
    <p class="rollcall-declare">正在點名！</p>
    <buttonPrimary>我到了</buttonPrimary>
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
.rollcall-enroll {
  padding-top: 217px;
  .rollcall-time {
    display: block;
    margin-bottom: 26px;
  }
  .primary-button {
    width: 200px;
    margin-top: 48px;
    font-size: 20px;
    line-height: 44px;
  }
}

.rollcall-time,
.rollcall-declare {
  @include fontstyle(500, 40px, 1.5, $font, #727272);
  text-align: center;
}

.rollcall-declare {
  margin-bottom: 79px;
}
</style>