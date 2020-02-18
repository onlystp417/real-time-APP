<template>
  <a @click.prevent="$emit('click')" class="button-tertiary" href>
    <slot></slot>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button-tertiary {
  position: absolute;
  right: 17px;
  bottom: 17px;
  background: $light-blue;
  width: 52px;
  height: 28px;
  border-radius: 7px;
  @include fontstyle(400, 16px, 1.5, $font, $white);
  text-align: center;
  border: $light-blue 2px solid;
  &:active {
    background: $white;
    color: $light-blue;
    border: $light-blue 2px solid;
  }
  .correct {
    background: $white;
    border: 1px solid $success;
    @include fontstyle(400, 16px, 1.5, $font, $success);
  }
  .wrong {
    background: $white;
    border: 1px solid $warning;
    @include fontstyle(400, 16px, 1.5, $font, $warning);
  }
}
</style>