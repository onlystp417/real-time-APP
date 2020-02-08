<template>
  <div>
    <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz>
    <placeHolder></placeHolder>
    <!-- <shallowMenu></shallowMenu> -->
    <deepMainMenu></deepMainMenu>
  </div>
</template>

<script>
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import placeHolder from "@/components/placeHolder.vue";
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
export default {
  components: {
    deepSubMenuRollcallQuiz,
    placeHolder,
    shallowMenu,
    deepMainMenu
  }
};
</script>

<style lang="scss" scoped>
</style>