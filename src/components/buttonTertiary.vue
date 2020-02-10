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
  float: right;
  background: $light-blue;
  width: 52px;
  height: 28px;
  margin-right: 17px;
  border-radius: 7px;
  @include fontstyle(400, 16px, 28px, $font, $white);
  text-align: center;
}
</style>