<template>
  <div class="missionDeep">
    <router-view></router-view>
    <deepMenu></deepMenu>
  </div>
</template>

<script>
  import deepMenu from '@/components/deepMenu.vue';
  import deepSubMenu from '@/components/deepSubMenu.vue';

  export default {
    components: {
      deepMenu,
      deepSubMenu
    }
  };
</script>

<style lang="scss" scoped>
  #app .missionDeep {
    padding-left: 0px;
    padding-right: 0px;
  }
</style>