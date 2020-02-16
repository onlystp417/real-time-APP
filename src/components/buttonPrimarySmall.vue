<template>
  <button class="primary-button-small" @click.prevent="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.primary-button-small {
  background: $light-blue;
  border-radius: 21px;
  margin: auto;
  width: 228px;
  height: 42px;
  color: $white;
  font-size: 16px;
  box-sizing: border-box;
  &:active, &:focus {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
    outline: none;
  }
  &.finished {
  background: $white;
  border: #bcbcbc 2px solid;
  color: #bcbcbc;
}
}
</style>