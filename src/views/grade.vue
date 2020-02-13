<template>
  <div class="grade content-area main-menu-placeholder">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <!-- <deepSubMenuMessage></deepSubMenuMessage> -->
    <!-- <deepMainMenu></deepMainMenu> -->
    <shallowMenu></shallowMenu>
    <div class="grade-content">
      <section class="grade-answer">
        <componentTitle>答題表現</componentTitle>
        <li class="normal-card list-card">
          <h4>題目回答率</h4>
          <span>100%</span>
        </li>
        <li class="normal-card list-card">
          <h4>題目正確率</h4>
          <span>100%</span>
        </li>
        <li class="normal-card list-card">
          <h4>回答題數</h4>
          <span>5/5</span>
        </li>
        <li class="normal-card list-card">
          <h4>正確題數</h4>
          <span>4/4</span>
        </li>
        <li class="normal-card list-card">
          <h4>全班排名</h4>
          <span>11/28</span>
        </li>
      </section>
      <section class="grade-discussion">
        <componentTitle>討論表現</componentTitle>
        <li class="normal-card list-card">
          <h4>發表文章數</h4>
          <span>100%</span>
        </li>
      </section>
    </div>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import componentTitle from "@/components/componentTitle.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    componentTitle
  }
};
</script>

<style lang="scss" scoped>
.grade-content {
  padding-top: 28px;
  li {
    list-style: none;
  }
}

.grade-answer {
  margin-bottom: 18px;
}
</style>