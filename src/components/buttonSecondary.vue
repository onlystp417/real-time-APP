<template>
  <a class="secondary-button" @click.prevent="$emit('click')"><slot>查看</slot></a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.secondary-button {
  display: inline-block;
  background: $light-blue;
  width: 74px;
  height: 32px;
  border-radius: 9px;
  box-sizing: border-box;
  box-shadow: 0px 1px 6px #00000029;
  text-align: center;
  border: $light-blue 2px solid;
  @include fontstyle(400, 16px, 30px, $font, $white);
  &:active,&:focus {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
}
</style>