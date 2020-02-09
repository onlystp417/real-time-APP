<template>
  <button class="primary-button-small">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.primary-button-small {
  display: block;
  background: $light-blue;
  border-radius: 21px;
  margin: auto;
  padding: 0;
  width: 228px;
  height: 42px;
  color: $white;
  font-size: 16px;
  box-sizing: border-box;
  &:active {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>