<template>
  <div class="quiz">
    <component @click="setComponentId" :is="componentId"></component>
  </div>
</template>

<script>
import quizQuestionAbbreviation from "@/views/quiz/quizQuestionAbbreviation.vue";
import quizQuestion from "@/views/quiz/quizQuestionTwo.vue";
import quizQuestionTwo from "@/views/quiz/quizQuestion.vue";
import quizPopover from "@/views/quiz/quizPopover.vue";

export default {
  data: function() {
    return {
      componentId: "quizQuestionAbbreviation"
    };
  },
  methods: {
    setComponentId(data) {
      this.componentId = data;
      console.log(data)
      console.log(this.componentId)
    }
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