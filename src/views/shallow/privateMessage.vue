<template>
  <div class="private-message">
    <div class="message-list">
      <section class="private-message-card">
        <img src="@/assets/images/understand.png" alt="smile face" />
        <div>
          <p>我懂了</p>
          <span>已送出</span>
          <time>2019-06-11 14:44</time>
        </div>
      </section>
      <section class="private-message-card">
        <img src="@/assets/images/typing.png" alt="smile face" />
        <div>
          <p>課程流暢</p>
          <span>已送出</span>
          <time>2020-01-05 14:41</time>
        </div>
      </section>
      <div class="private-Message-button">
        <buttonQuaternary @click="setMessageIconActive"></buttonQuaternary>
      </div>
    </div>
    <messageIcon v-if="isMessageIconActive" @click></messageIcon>
    <!-- <messageTyping>
      <p slot="title">傳送訊息</p>
      <input slot="input" class="content" type="text" placeholder="輸入文字或上傳圖片給老師" />
    </messageTyping>-->
  </div>
</template>

<script>
import messageIcon from "@/components/messageIcon.vue";
import messageTyping from "@/components/messageTyping.vue";
import buttonQuaternary from "@/components/buttonQuaternary.vue";
export default {
  data: function() {
    return {
      isMessageIconActive: false,
      pageMessage: [
        { text: "我懂了", imgUrl: "@/assets/images/understand.png" },
        { text: "聽不懂", imgUrl: "@/assets/images/understand.png" }
      ]
    };
  },
  methods: {
    setMessageIconActive() {
      this.isMessageIconActive = !this.isMessageIconActive;
    }
  },
  components: {
    messageIcon,
    messageTyping,
    buttonQuaternary
  }
};
</script>

<style lang="scss" scoped>
.private-message {
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 28px;
  height: 100%;
  position: relative;
  &-button {
    text-align: center;
  }
  &-card {
    padding: 9px 12px 8px 12px;
    margin-bottom: 18px;
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    &:last-child {
      margin-bottom: 119px;
    }
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
}
</style>