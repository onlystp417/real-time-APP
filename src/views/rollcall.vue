<template>
  <div>
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <placeHolder></placeHolder> -->
    <!-- <rollcallHome></rollcallHome> -->
    <rollcallEnroll></rollcallEnroll>
    <shallowMenu></shallowMenu>
    <!-- <deepMainMenu></deepMainMenu> -->
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import placeHolder from "@/components/placeHolder.vue";
import rollcallHome from "@/views/rollcallHome.vue";
import rollcallEnroll from "@/views/rollcallEnroll.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    placeHolder,
    rollcallHome,
    rollcallEnroll
  }
};
</script>

<style lang="scss" scoped>
</style>