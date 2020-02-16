<template>
    <nav class="deep-sub-menu">
      <a @click.prevent="$emit('click', $event)" :class="{current: isActive}" href>
        <span>
          <slot name="first"></slot>
        </span>
      </a>
      <a @click.prevent="$emit('linkclick', $event)" :class="{current: isActive}" href>
        <span>
          <slot name="second"></slot>
        </span>
      </a>
    </nav>
</template>

<script>
export default {
  props: {
    isActive: Boolean
  }
};
</script>

<style lang="scss" scope>
.deep-sub-menu {
  position: absolute;
  top: 56px;
  right: 0;
  left: 0;
  z-index: 999;
  background: $white;
  a {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
  span {
    display: inline-block;
    height: 39px;
    box-sizing: border-box;
    padding: 0 5px;
    @include fontstyle(400, 20px, 37px, $font, #b7b7b7);
  }
  .current {
    span {
      color: $light-blue;
      border-bottom: 2px solid $light-blue;
    }
  }
}
</style>