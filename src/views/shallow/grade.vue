<template>
  <div class="grade">
    <section class="grade-answer">
      <h3>答題表現</h3>
      <li class="answer-item">
        <h4>題目回答率</h4>
        <span>100%</span>
      </li>
      <li
        class="answer-item"
        @click="$_setTimer({ componentId: null, missionTimeData:{ level:3, section:2,nextLevel:3,nextSection:3 }})"
      >
        <h4>題目正確率</h4>
        <span>100%</span>
      </li>
      <li class="answer-item">
        <h4>回答題數</h4>
        <span>5/5</span>
      </li>
      <li class="answer-item">
        <h4>正確題數</h4>
        <span>4/4</span>
      </li>
      <li
        class="answer-item"
        @click="$_setTimer({ componentId: null, missionTimeData:{ level:0,section:2, nextLevel: 0, nextSection: 3,complete: true}})"
      >
        <h4>全班排名</h4>
        <span>11/28</span>
      </li>
    </section>
    <section class="grade-discussion">
      <h3>討論表現</h3>
      <li class="answer-item">
        <h4>發表文章數</h4>
        <span>100%</span>
      </li>
    </section>
  </div>
</template>

<script>
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin]
};
</script>

<style lang="scss" scoped>
.grade {
  padding-top: 28px;
  width: 92%;
  max-width: 510px;
  margin: auto;
  &-answer {
    margin-bottom: 18px;
  }
  li {
    list-style: none;
  }
  h3 {
    margin: auto;
    margin-bottom: 9px;
    @include fontstyle(700, 24px, 1.2, $font, #474747);
  }
}

.answer-item {
  background: $white;
  box-shadow: 0px 3px 6px #00000029;
  margin-bottom: 13px;
  padding: 0 10px 0 15px;
  h4 {
    display: inline-block;
    width: 75%;
    @include fontstyle(700, 18px, 50px, $font, #474747);
  }
  span {
    display: inline-block;
    width: 25%;
    text-align: right;
    padding-right: 14px;
    @include fontstyle(700, 18px, 22px, $font, #474747);
  }
}
</style>