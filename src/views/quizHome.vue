<template>
  <div class="quiz-home">
    <section class="quiz-card-content">
      <h4>單選題</h4>
      <h5>第一題</h5>
      <p>女性身高的第75百分位數若為160公分，則表示有多少百分位數的女性身高小於160公分?</p>
      <!-- <buttonTertiary>作答</buttonTertiary> -->
      <buttonTertiaryCorrect></buttonTertiaryCorrect>
      <!-- <buttonTertiaryWrong></buttonTertiaryWrong> -->
    </section>
    <section class="quiz-card-content">
      <h4>單選題</h4>
      <h5>第二題</h5>
      <p>一般而言，人類的短期記憶能力有其限制，其限制為多少?</p>
      <buttonTertiary>作答</buttonTertiary>
      <!-- <buttonTertiaryCorrect></buttonTertiaryCorrect> -->
      <!-- <buttonTertiaryWrong></buttonTertiaryWrong> -->
    </section>
  </div>
</template>

<script>
import buttonTertiary from "@/components/buttonTertiary.vue";
import buttonTertiaryCorrect from "@/components/buttonTertiaryCorrect.vue";
import buttonTertiaryWrong from "@/components/buttonTertiaryWrong.vue";
export default {
  components: {
    buttonTertiary,
    buttonTertiaryCorrect,
    buttonTertiaryWrong
  }
};
</script>

<style lang="scss" scoped>
.quiz-home {
  width: 379px;
  margin: auto;
  padding-top: 28px;
  > section {
    position: relative;
    height: 165px;
  }
}
</style>