<template>
  <div class="quiz">
    <!-- <quizQuestion></quizQuestion> -->
    <quizQuestionAbbreviation></quizQuestionAbbreviation>
    <!-- <quizPopover></quizPopover> -->
  </div>
</template>

<script>
import quizQuestion from "@/views/quiz/quizQuestion.vue";
import quizQuestionAbbreviation from "@/views/quiz/quizQuestionAbbreviation.vue";
import quizPopover from "@/views/quiz/quizPopover.vue";
export default {
  components: {
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