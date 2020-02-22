<template>
  <div class="quiz">
    <component @click="setComponentId" :is="componentId"></component>
  </div>
</template>

<script>
import quizQuestionAbbreviation from "@/components/quiz/quizQuestionAbbreviation.vue";
import quizQuestion from "@/components/quiz/quizQuestionTwo.vue";
import quizQuestionTwo from "@/components/quiz/quizQuestion.vue";
import quizPopover from "@/components/quiz/quizPopover.vue";

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