<template>
  <button class="primary-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.primary-button {
  display: block;
  background: $light-blue;
  border-radius: 21px;
  margin: auto;
  padding: 0;
  width: 228px;
  line-height: 42px;
  color: $white;
  font-size: 16px;
  &:active {
    box-sizing: border-box;
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>