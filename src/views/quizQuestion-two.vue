<template>
  <div class="quiz-question">
    <section class="question-card quiz-card-content normal-card">
      <h4>單選題</h4>
      <h5>第二題</h5>
      <p>一般而言，人類的短期記憶能力有其限制，其限制為多少?</p>
      <ol>
        <li>3±1</li>
        <li class="answer-select">13±2</li>
        <li>7±2</li>
        <li>19±2</li>
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