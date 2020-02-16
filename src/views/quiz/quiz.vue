<template>
  <div class="quiz">
    <!-- <quizQuestion></quizQuestion> -->
    <quizQuestionAbbreviation></quizQuestionAbbreviation>
    <!-- <quizPopover></quizPopover> -->
    <shallowMenu></shallowMenu>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";
import quizQuestion from "@/views/quiz/quizQuestion.vue";
import quizQuestionAbbreviation from "@/views/quiz/quizQuestionAbbreviation.vue";
import quizPopover from "@/views/quiz/quizPopover.vue";
export default {
  components: {
    shallowMenu,
    quizQuestionAbbreviation,
    quizQuestion,
    quizPopover
  }
};
</script>

<style lang="scss" scoped>
.quiz{
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>