<template>
  <div class="public-message">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <!-- <deepSubMenuMessage></deepSubMenuMessage> -->
    <deepMainMenu></deepMainMenu>
    <!-- <shallowMenu></shallowMenu> -->
    <div class="message-list">
      <section class="public-message-card normal-card">
        <header class="message-header">
          <img src="../assets/images/user.png" alt="user graphy" />
          <div>
            <h5>王小明</h5>
            <time>2019-06-11 16:00</time>
          </div>
        </header>
        <div class="message-content">
          <h5>邊緣運算</h5>
          <p>即時反饋系統</p>
        </div>
        <div class="message-response">
          <span class="num">1</span>
          <span class="unit">則回應</span>
        </div>
      </section>
      <section class="public-message-card normal-card">
        <header class="message-header">
          <img src="../assets/images/user.png" alt="user graphy" />
          <div>
            <h5>王小明</h5>
            <time>2020-01-05 03:30</time>
          </div>
        </header>
        <div class="message-content">
          <h5>實驗測試</h5>
          <p>即時反饋系統</p>
        </div>
        <div class="message-response">
          <span class="num">0</span>
          <span class="unit">則回應</span>
        </div>
      </section>
      <buttonQuaternary></buttonQuaternary>
    </div>
    <messageTyping></messageTyping>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import messageTyping from "@/components/messageTyping.vue";
import buttonQuaternary from "@/components/buttonQuaternary.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    messageTyping,
    buttonQuaternary
  }
};
</script>

<style lang="scss" scoped>
.public-message {
  height: calc(100vh - 135px);
  position: relative;
  padding-top: 28px;
}

.public-message-card {
  position: relative;
  padding: 9px 12px;
  margin-bottom: 26px;
  min-height: 170px;
}

.message-header {
  display: block;
  margin-bottom: 10px;
  img {
    display: inline-block;
    width: 29px;
    height: 29px;
    vertical-align: top;
    margin-right: 5px;
  }
  > div {
    display: inline-block;
    width: calc(100% - 34px);
    vertical-align: top;
  }
  h5 {
    @include fontstyle(500, 16px, 1, $font, #474747);
    margin-bottom: -3px;
  }
  time {
    display: inline-block;
    @include fontstyle(400, 10px, 1, $font, #474747);
  }
}

.message-content {
  h5 {
    margin-bottom: 3px;
    @include fontstyle(500, 14px, 1.2, $font, #474747);
  }
  p {
    display: inline-block;
    @include fontstyle(400, 10px, 1.5, $font, #474747);
  }
}

.message-response {
  position: absolute;
  right: 16px;
  bottom: 9px;
  @include fontstyle(300px, 10px, 1, $font, #b7b7b7);
}

.public-message-card:last-child {
  margin-bottom: 119px;
}
</style>