<template>
  <div class="private-message">
    <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz>
    <deepSubMenuGradeCourse></deepSubMenuGradeCourse>
    <deepSubMenuMessage></deepSubMenuMessage>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
export default {
  shallowMenu,
  deepMainMenu,
  deepSubMenuRollcallQuiz,
  deepSubMenuGradeCourse,
  deepSubMenuMessage
};
</script>

<style lang="scss" scoped>
</style>