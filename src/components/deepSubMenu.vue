<template>
  <nav class="deep-submenu">
    <a
      @click.prevent="$emit('subMenuClick', page.pages[0])"
      :class="{current: page.pages[0] === page.currentPage}"
      href
    >
      <span>
        <slot name="first">第一分類</slot>
      </span>
    </a>
    <a @click.prevent="$emit('subMenuClick', page.pages[1])" :class="{current: page.pages[1] === page.currentPage}" href>
      <span>
        <slot name="second">第二分類</slot>
      </span>
    </a>
  </nav>
</template>

<script>
export default {
  props: ['page']
};
</script>

<style lang="scss" scope>
.deep-submenu {
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