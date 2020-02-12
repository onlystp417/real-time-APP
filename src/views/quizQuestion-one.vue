<template>
  <div class="quiz-question">
    <section class="question-card quiz-card-content normal-card">
      <h4>單選題</h4>
      <h5>第一題</h5>
      <p>女性身高的第75百分位數若為160公分，則表示有多少百分位數的女性身高小於160公分?</p>
      <ol>
        <li>25%</li>
        <li>50%</li>
        <li class="answer-select">75%</li>
        <li>100%</li>
      </ol>
    </section>
    <buttonPrimaryBig>確定</buttonPrimaryBig>
  </div>
</template>

<script>
import buttonPrimaryBig from "@/components/buttonPrimaryBig.vue";
export default {
  components: {
    buttonPrimaryBig
  }
};
</script>

<style lang="scss" scoped>
</style>