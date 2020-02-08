<template>
  <div>
    <deepSubMenuMessage></deepSubMenuMessage>
    <placeHolder></placeHolder>
    <!-- <shallowMenu></shallowMenu> -->
    <deepMainMenu></deepMainMenu>
  </div>
</template>

<script>
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import placeHolder from "@/components/placeHolder.vue";
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
export default {
  components: {
    deepSubMenuMessage,
    placeHolder,
    shallowMenu,
    deepMainMenu
  }
};
</script>

<style lang="scss" scoped>
</style>