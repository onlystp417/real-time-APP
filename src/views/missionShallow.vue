<template>
  <div>
    <router-view></router-view>
    <shallowMenu></shallowMenu>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";

export default {
  components: {
    shallowMenu
  }
};
</script>

<style lang="scss" scoped>
</style>