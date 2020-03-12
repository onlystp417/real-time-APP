<template>
  <div class="quiz">
    <component @changeComponent="$_nextPage" @setTimer="$_setTimer" :is="componentId"></component>
  </div>
</template>

<script>
import quizQuestionAbbreviation from "@/components/quiz/quizQuestionAbbreviation.vue";
import quizQuestion from "@/components/quiz/quizQuestionTwo.vue";
import quizQuestionTwo from "@/components/quiz/quizQuestion.vue";
import quizPopover from "@/components/quiz/quizPopover.vue";
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin],
  data: function() {
    return {
      componentId: "quizQuestionAbbreviation"
    };
  },
  components: {
    quizQuestionAbbreviation,
    quizQuestion,
    quizQuestionTwo,
    quizPopover
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>