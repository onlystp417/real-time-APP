<template>
  <div class="quiz-popover-wrapper">
    <filterPopover></filterPopover>
    <div class="quiz-popover">
      <h5>答題結果</h5>
      <div>
        <slot name="images"></slot>
        <slot name="text"></slot>
        <buttonQuinary @click="$emit('click')">確認</buttonQuinary>
      </div>
    </div>
  </div>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
import filterPopover from "@/components/filterPopover.vue";
export default {
  components: {
    filterPopover,
    buttonQuinary
  }
};
</script>

<style lang="scss" scoped>
.quiz-popover {
  position: absolute;
  top: 32.2vh;
  right: 10vw;
  left: 10vw;
  z-index: 999;
  text-align: center;
  > h5 {
    background: $light-blue;
    border-radius: 17px 17px 0 0;
    @include fontstyle(400, 18px, 22px, $font, $white);
    line-height: 40px;
  }
  > div {
    background: $white;
    padding: 17px 0 19px 0;
    border-radius: 0 0 17px 17px;
  }
  img {
    width: 72px;
    height: 72px;
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 20px;
  }
  .correct-text {
    @include fontstyle(500, 30px, 1.5, $font, $success);
  }
  .wrong-text {
    @include fontstyle(500, 30px, 1.5, $font, $warning);
  }
}
</style>