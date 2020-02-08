<template>
  <header class="bar">
    <div class="bar-state"></div>
    <a href>
      <backward></backward>
      <h1 class="bar-app">使用者介面設計</h1>
    </a>
  </header>
</template>

<script>
import backward from "@/components/backward.vue";
export default {
  components: {
    backward
  }
};
</script>

<style lang="scss" scoped>
.bar {
  position: fixed;
  width: 100%;
  top: 0px;
  &-state {
    position: absolute;
    left: 0;
    right: 0;
    background-color: #0000008a;
    height: 24px;
  }
  &-app {
    background-color: #8ec8f3;
    @include fontstyle(900, 20px, 27px, $font, #fff);
    padding: 37px 45px 16px 45px;
  }
  a {
    display: block;
  }
}
</style>
