<template>
  <a class="button-tertiary" href>
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-tertiary {
  position: absolute;
  right: 17px;
  bottom: 17px;
  background: $light-blue;
  width: 52px;
  height: 28px;
  border-radius: 7px;
  @include fontstyle(400, 16px, 28px, $font, $white);
  text-align: center;
  .correct {
    background: $white;
    border: 1px solid $success;
    @include fontstyle(400, 16px, 26px, $font, $success);
  }
  .wrong {
    background: $white;
    border: 1px solid $warning;
    @include fontstyle(400, 16px, 26px, $font, $warning);
  }
}
</style>