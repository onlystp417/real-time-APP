<template>
  <header class="bar">
    <!-- <div class="bar-state"></div> -->
      <h1 class="bar-app">使用者介面設計</h1>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.bar {
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: 999;
  // &-state {
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   background-color: #0000008a;
  //   height: 24px;
  // }
  &-app {
    background-color: #8ec8f3;
    @include fontstyle(400, 20px, 27px, $font, #fff);
    padding: 13px 45px 16px 45px;
  }
  a {
    display: block;
  }
}
</style>
