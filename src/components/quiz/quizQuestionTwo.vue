<template>
  <form class="quiz-question">
    <section class="question-card quiz-card-content">
      <h4>單選題</h4>
      <h5>第二題</h5>
      <p>一般而言，人類的短期記憶能力有其限制，其限制為多少?</p>
      <div class="answer">
        <input class="check-itself" type="radio" name="answer" id="answer_1" />
        <label @click="anserChoose = true" for="answer_1">3±1</label>
        <input class="check-itself" type="radio" name="answer" id="answer_2" />
        <label @click="anserChoose = true" for="answer_2">13±2</label>
        <input class="check-itself" type="radio" name="answer" id="answer_3" />
        <label @click="anserChoose = true" for="answer_3">7±2</label>
        <input class="check-itself" type="radio" name="answer" id="answer_4" />
        <label @click="anserChoose = true" for="answer_4">19±2</label>
      </div>
    </section>
    <div class="quiz-button">
      <buttonQuinary @click="anserChoose && (answer = true)">確定</buttonQuinary>
    </div>
    <quizPopover
      v-show="answer"
      @click="$emit('setTimer', {componentId: 'quizQuestionAbbreviation', missionTimeData:{ level:2, section:1,nextLevel:2,nextSection:2 }})"
    >
      <template v-slot:images>
        <img src="@/assets/images/wrong.png" alt="wrong" />
      </template>
      <template v-slot:text>
        <p class="wrong-text">錯誤</p>
      </template>
    </quizPopover>
  </form>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
import quizPopover from "@/components/quiz/quizPopover.vue";

export default {
  data: function() {
    return {
      answer: false,
      anserChoose: false
    };
  },
  components: {
    buttonQuinary,
    quizPopover
  }
};
</script>

<style lang="scss" scoped>
.quiz-card-content {
  margin-bottom: 14px;
  padding: 8px 0px 17px 0px;
  h4,
  h5,
  p {
    padding: 0 17px 0px 15px;
  }
  h4 {
    margin-bottom: 5.5px;
    padding-bottom: 7.5px;
    border-bottom: 1px solid #0000004d;
    @include fontstyle(700, 16px, 22px, $font, #474747);
  }
  h5,
  p {
    @include fontstyle(400, 12px, 22px, $font, #474747);
  }
}

.question-card {
  background: $white;
  box-shadow: 0px 3px 6px #00000029;
  margin-bottom: 36px;
  padding-bottom: 5px;
  p {
    height: 65px;
  }
  .answer {
    padding: 0 16px;
    counter-reset: item;
    input {
      display: none;
    }
    label {
      // width: 347px;
      // margin: auto;
      display: block;
      margin-bottom: 10px;
      background: #f6f6f6;
      padding-left: 15px;
      list-style-type: none;
      counter-increment: num;
      @include fontstyle(400, 18px, 43px, $font, #727272);
      &:hover {
        background: $light-blue;
        color: $white;
      }
    }
    > label::before {
      content: counter(num) ".";
      padding-right: 5px;
    }
    > label:first-child::before {
      padding-right: 7px;
    }
    .check-itself:checked + label {
      background: $light-blue;
      color: $white;
    }
  }
}

.quiz-button {
  text-align: center;
}
</style>