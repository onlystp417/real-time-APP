<template>
  <h3 class="rollcall-title">
    <slot></slot>
  </h3>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rollcall-title {
  margin-bottom: 9px;
  @include fontstyle(700, 24px, 1.2, $font, #474747);
}
</style>