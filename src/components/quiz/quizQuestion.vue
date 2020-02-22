<template>
  <div class="quiz-question">
    <section class="question-card quiz-card-content normal-card">
      <h4>單選題</h4>
      <h5>
        第
        <slot>一</slot>題
      </h5>
      <p>
        <slot>女性身高的第75百分位數若為160公分，則表示有多少百分位數的女性身高小於160公分?</slot>
      </p>
      <ol>
        <li>25%</li>
        <li>50%</li>
        <li class="answer-select">75%</li>
        <li>100%</li>
      </ol>
    </section>
    <div class="quiz-button">
      <buttonQuinary @click="$emit('click', $event)">確定</buttonQuinary>
    </div>
  </div>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
export default {
  components: {
    buttonQuinary
  }
};
</script>

<style lang="scss" scoped>
.quiz-button {
  text-align: center;
}
</style>