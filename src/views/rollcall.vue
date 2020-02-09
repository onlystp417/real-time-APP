<template>
  <div>
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <rollcallHome></rollcallHome> -->
    <!-- <rollcallEnroll></rollcallEnroll> -->
    <rollcallOntime></rollcallOntime>
    <!-- <shallowMenu></shallowMenu> -->
    <deepMainMenu></deepMainMenu>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import rollcallHome from "@/views/rollcallHome.vue";
import rollcallEnroll from "@/views/rollcallEnroll.vue";
import rollcallOntime from "@/views/rollcallOntime.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    rollcallHome,
    rollcallEnroll,
    rollcallOntime
  }
};
</script>

<style lang="scss" scoped>
</style>