<template>
  <div class="button-tertiary-correct">正確</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-tertiary-correct {
  position: absolute;
  right: 17px;
  bottom: 17px;
  background: $white;
  width: 52px;
  height: 28px;
  border-radius: 7px;
  border: 1px solid $success;
  @include fontstyle(400, 16px, 26px, $font, $success);
  text-align: center;
}
</style>