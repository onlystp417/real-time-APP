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
  padding: 6px 21px 5px 21px;
  border-radius: 9px;
  @include fontstyle(400, 16px, 22px, $font, $white);
  &:active {
    box-sizing: border-box;
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>