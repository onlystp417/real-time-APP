<template>
  <div class="rollcall content-area main-menu-placeholder">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <!-- <deepSubMenuMessage></deepSubMenuMessage> -->
    <!-- <rollcallHome></rollcallHome> -->
    <!-- <rollcallEnroll></rollcallEnroll> -->
    <!-- <rollcallOntime></rollcallOntime> -->
    <rollcallRecord></rollcallRecord>
    <!-- <deepMainMenu></deepMainMenu> -->
    <shallowMenu></shallowMenu>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import rollcallHome from "@/views/rollcallHome.vue";
import rollcallEnroll from "@/views/rollcallEnroll.vue";
import rollcallOntime from "@/views/rollcallOntime.vue";
import rollcallRecord from "@/views/rollcallRecord.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    rollcallHome,
    rollcallEnroll,
    rollcallOntime,
    rollcallRecord
  }
};
</script>

<style lang="scss" scoped>
</style>