<template>
  <div class="course">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <!-- <deepSubMenuMessage></deepSubMenuMessage> -->
    <!-- <deepMainMenu></deepMainMenu> -->
    <shallowMenu></shallowMenu>
    <courseHome></courseHome>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import courseHome from "@/views/courseHome.vue";

export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    courseHome
  }
};
</script>

<style lang="scss" scoped>
</style>