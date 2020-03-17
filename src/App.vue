<template>
  <div id="app">
    <bar></bar>
    <transition name="fade">
      <router-view class="app-container"></router-view>
    </transition>
  </div>
</template>

<script>
  import bar from '@/components/bar.vue';

  export default {
    components: {
      bar
    }
  };
</script>

<style lang="scss">
  #app {
    padding-top: 56px;
    position: relative;
    background: #f0f1f3;
    .app-container {
      height: calc(100vh - 56px);
      overflow: scroll;
      padding-left: 5px;
      padding-right: 5px;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.1s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }
</style>
