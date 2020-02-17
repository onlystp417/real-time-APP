<template>
  <div class="missionDeep">
    <router-view></router-view>
    <deepMenu></deepMenu>
  </div>
</template>

<script>
import deepMenu from "@/components/deepMenu.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";

export default {
  components: {
    deepMenu,
    deepSubMenu
  }
};
</script>

<style lang="scss" scoped>
.missionDeep{
    padding-top: 39px;
}
</style>