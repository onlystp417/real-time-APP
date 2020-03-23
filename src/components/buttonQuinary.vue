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
  max-width: 200px;
  background: $light-blue;
  border-radius: 21px;
  padding: 0;
  width: 100%;
  height: 44px;
  box-shadow: 0px 1px 6px #00000029;
  color: $white;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
  &:active {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>