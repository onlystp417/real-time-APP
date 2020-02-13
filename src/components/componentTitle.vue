<template>
  <h3 class="component-title">
    <slot></slot>
  </h3>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.component-title {
  width: 92%;
  max-width: 510px;
  margin: auto;
  margin-bottom: 9px;
  @include fontstyle(500, 24px, 1.2, $font, #474747);
}
</style>