<template>
  <div id="app">
    <bar></bar>
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import bar from "@/components/bar.vue";

export default {
  data: function() {
    return {};
  },
  components: {
    bar
  }
};
</script>

<style lang="scss">
#app {
  padding-top: 56px;
  height: 100vh;
  position: relative;
}
.app-container {
  height: 100%;
  overflow: scroll;
  padding-bottom: 80px;
}
</style>
