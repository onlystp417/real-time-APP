<template>
  <header class="bar">
    <div class="bar-img">
      <a v-if="$store.state.user.pageReturn"
         @click="$router.go(-1)">
        <img src="../assets/images/backward.png"
             alt="go">
      </a></div>
    <h1 class="bar-app">使用者介面設計</h1>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .bar {
    font-size: 0px;
    position: absolute;
    width: 100%;
    top: 0px;
    z-index: 9;
    background-color: #8ec8f3;
    padding: 11px;
    &-img {
      vertical-align: middle;
      margin-right: 3px;
      display: inline-block;
      width: 33px;
      height: 33px;
    }
    &-app {
      display: inline;
      vertical-align: middle;
      @include fontstyle(400, 20px, 27px, $font, #fff);
    }
  }
</style>
