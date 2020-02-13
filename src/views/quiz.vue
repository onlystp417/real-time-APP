<template>
  <div class="quiz content-area main-menu-placeholder">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <!-- <deepSubMenuMessage></deepSubMenuMessage> -->
    <!-- <deepMainMenu></deepMainMenu> -->
    <quizHome></quizHome>
    <!-- <quizQuestionOne></quizQuestionOne> -->
    <!-- <quizQuestionTwo></quizQuestionTwo> -->
    <!-- <quizPopover></quizPopover> -->
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
import quizQuestionOne from "@/views/quizQuestion-one.vue";
import quizQuestionTwo from "@/views/quizQuestion-two.vue";
import quizPopover from "@/components/quizPopover.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    quizHome,
    quizQuestionOne,
    quizQuestionTwo,
    quizPopover
  }
};
</script>

<style lang="scss" scoped>
</style>