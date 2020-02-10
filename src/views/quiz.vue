<template>
  <div class="quiz">
    <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz>
    <deepSubMenuGradeCourse></deepSubMenuGradeCourse>
    <deepSubMenuMessage></deepSubMenuMessage>
    <deepMainMenu></deepMainMenu>
    <shallowMenu></shallowMenu>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import quizHome from "@/views/quizHome.vue";
import quizQuestion from "@/views/quizQuestion.vue";
import filterPopover from "@/components/filterPopover.vue";
import quizPopover from "@/components/quizPopover.vue";
export default {
  shallowMenu,
  deepMainMenu,
  deepSubMenuRollcallQuiz,
  deepSubMenuGradeCourse,
  deepSubMenuMessage,
  quizHome,
  quizQuestion,
  filterPopover,
  quizPopover
};
</script>

<style lang="scss" scoped>
</style>