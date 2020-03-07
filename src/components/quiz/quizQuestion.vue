<template>
  <form class="quiz-question">
    <section class="question-card quiz-card-content normal-card">
      <h4>單選題</h4>
      <h5>
        第
        <slot>一</slot>題
      </h5>
      <p>
        <slot>女性身高的第75百分位數若為160公分，則表示有多少百分位數的女性身高小於160公分?</slot>
      </p>
      <div class="answer">
        <input class="check-itself" type="radio" name="answer" id="answer_1" />
        <label @click="anserChoose = true" for="answer_1">25%</label>
        <input class="check-itself" type="radio" name="answer" id="answer_2" />
        <label @click="anserChoose = true" for="answer_2">50%</label>
        <input class="check-itself" type="radio" name="answer" id="answer_3" />
        <label @click="anserChoose = true" for="answer_3">75%</label>
        <input class="check-itself" type="radio" name="answer" id="answer_4" />
        <label @click="anserChoose = true" for="answer_4">100%</label>
      </div>
    </section>
    <div class="quiz-button">
      <buttonQuinary @click="anserChoose && (answer = true)" v-show="!answer">確定</buttonQuinary>
    </div>
    <quizPopover
      v-show="answer"
      @click="$emit('setTimer', {componentId: 'quizQuestionAbbreviation', missionTimeData:{level:1,section:1, setTime: 'both'}})"
    >
      <template v-slot:images>
        <img src="@/assets/images/correct.png" alt="correct" />
      </template>
      <template v-slot:text>
        <p class="correct-text">正確</p>
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
    @include fontstyle(400, 16px, 22px, $font, #474747);
  }
  h5,
  p {
    @include fontstyle(300, 12px, 22px, $font, #474747);
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
    // .answer-select {
    // }
  }
}

.quiz-button {
  text-align: center;
}
</style>