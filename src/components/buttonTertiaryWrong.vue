<template>
  <div class="button-tertiary-wrong">錯誤</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-tertiary-wrong {
  float: right;
  background: $white;
  width: 52px;
  height: 28px;
  margin-right: 17px;
  border-radius: 7px;
  border: 1px solid $warning;
  @include fontstyle(400, 16px, 26px, $font, $warning);
  text-align: center;
}
</style>