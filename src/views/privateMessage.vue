<template>
  <div class="private-message content-area main-menu-placeholder">
    <!-- <deepSubMenuRollcallQuiz></deepSubMenuRollcallQuiz> -->
    <!-- <deepSubMenuGradeCourse></deepSubMenuGradeCourse> -->
    <deepSubMenuMessage></deepSubMenuMessage>
    <!-- <deepMainMenu></deepMainMenu> -->
    <shallowMenu></shallowMenu>
    <div class="message-list">
      <section class="public-message-card normal-card">
        <img src="../assets/images/understand.png" alt="smile face" />
        <div>
          <p>我懂了</p>
          <span>已送出</span>
          <time>2019-06-11 14:44</time>
        </div>
      </section>
      <section class="public-message-card normal-card">
        <img src="../assets/images/typing.png" alt="smile face" />
        <div>
          <p>課程流暢</p>
          <span>已送出</span>
          <time>2020-01-05 14:41</time>
        </div>
      </section>
      <buttonQuaternary></buttonQuaternary>
    </div>
    <!-- <messageIcon></messageIcon> -->
    <messageTyping>
      <p slot="title">傳送訊息</p>
      <input slot="input" class="content" type="text" placeholder="輸入文字或上傳圖片給老師" />
    </messageTyping>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenuRollcallQuiz from "@/components/deepSubMenu_rollcall_quiz.vue";
import deepSubMenuMessage from "@/components/deepSubMenu_message.vue";
import deepSubMenuGradeCourse from "@/components/deepSubMenu_grade_course.vue";
import messageIcon from "@/components/messageIcon.vue";
import messageTyping from "@/components/messageTyping.vue";
import buttonQuaternary from "@/components/buttonQuaternary.vue";
export default {
  components: {
    shallowMenu,
    deepMainMenu,
    deepSubMenuRollcallQuiz,
    deepSubMenuGradeCourse,
    deepSubMenuMessage,
    messageIcon,
    messageTyping,
    buttonQuaternary
  }
};
</script>

<style lang="scss" scoped>
.private-message {
  padding-top: 28px;
}
.public-message-card {
  padding: 9px 12px 8px 12px;
  margin-bottom: 18px;
  img {
    width: 26px;
    height: 26px;
    display: inline-block;
    margin-right: 8px;
  }
  > div {
    display: inline-block;
    width: calc(100% - 34px);
  }
  p {
    display: inline-block;
    padding-right: 5px;
    @include fontstyle(500, 16px, 1.2, $font, #474747);
  }
  span {
    @include fontstyle(300, 16px, 1.2, $font, #474747);
  }
  time {
    display: block;
    margin-top: 2px;
    @include fontstyle(400, 16px, 1.2, $font, #474747);
  }
}

.public-message-card:last-child {
  margin-bottom: 119px;
}
</style>