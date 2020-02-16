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
.normal-card {
  width: 92%;
  max-width: 510px;
  margin: auto;
  background: $white;
  box-shadow: 0px 3px 6px #00000029;
}


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
  margin-top: 15px;
  margin-bottom: 36px;
  padding-bottom: 5px;
  p {
    height: 65px;
  }
  ol {
    padding: 0 16px;
    counter-reset: item;
    li {
      // width: 347px;
      // margin: auto;
      margin-bottom: 10px;
      background: #F6F6F6;
      padding-left: 15px;
      list-style-type: none;
      counter-increment: num;
      @include fontstyle(400, 18px, 43px, $font, #727272);
      &:hover {
        background: $light-blue;
        color: $white;
      }
    }
    > li::before {
      content: counter(num) ".";
      padding-right: 5px;
    }
    > li:first-child::before {
      padding-right: 7px;
    }
    .answer-select {
      background: $light-blue;
      color: $white;
    }
  }
}
</style>