<template>
  <button class="primary-button-big">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.primary-button-big {
  display: block;
  background: $light-blue;
  border-radius: 21px;
  margin: auto;
  padding: 0;
  width: 200px;
  height: 44px;
  color: $white;
  font-size: 20px;
  box-sizing: border-box;
  &:active {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>