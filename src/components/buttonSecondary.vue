<template>
  <div class="button-wrap">
    <button class="secondary-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-wrap {
  display: inline-block;
  width: 25%;
  text-align: right;
}

.secondary-button {
  background: $light-blue;
  width: 74px;
  height: 32px;
  border-radius: 9px;
  box-sizing: border-box;
  @include fontstyle(400, 16px, 22px, $font, $white);
  &:active {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>