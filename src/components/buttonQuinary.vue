<template>
  <button class="primary-button-big" @click.prevent="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.primary-button-big {
  width: 48.6vw;
  max-width: 250px;
  background: $light-blue;
  border-radius: 21px;
  padding: 0;
  width: 100%;
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