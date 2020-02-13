<template>
  <div class="course content-area main-menu-placeholder">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <!-- <deepSubMenuMessage></deepSubMenuMessage> -->
    <!-- <deepMainMenu></deepMainMenu> -->
    <shallowMenu></shallowMenu>
    <courseHome></courseHome>
    <!-- <courseSuspension></courseSuspension> -->
    <!-- <courseHomework></courseHomework> -->
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import courseHome from "@/views/courseHome.vue";
import courseSuspension from "@/views/courseSuspension.vue";
import courseHomework from "@/views/courseHomework.vue";

export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    courseHome,
    courseSuspension,
    courseHomework
  }
};
</script>

<style lang="scss" scoped>
</style>