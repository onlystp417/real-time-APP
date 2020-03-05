<template>
  <div class="private-message">
    <div class="message-list">
      <section
        class="private-message-card"
        v-for="(item, index) in currentMessage"
        :key="index"
      >
        <img :src="item.imgUrl" alt="emoji" />
        <div>
          <p>{{ item.text }}</p>
          <span>已送出</span>
          <time>{{ item.time }}</time>
        </div>
      </section>
      <div class="private-Message-button">
        <!-- 單純的重新賦予數值，可以用什麼方式去命名嘛？ -->
        <!-- 按鈕部分的邏輯要整理過 -->
        <buttonQuaternary
          @click="isMessageIconActive = !isMessageIconActive"
        ></buttonQuaternary>
      </div>
    </div>
    <!-- 這邊的結構可以重整嗎？結構重整後想要做到的是兩個任務可以透過一個命名區分出來？ -->
    <messageIcon
      v-show="isMessageIconActive"
      @setMessageIconActive="isMessageIconActive = !isMessageIconActive"
      @addIconMessage="addMessage"
      @addTypingMessage="isMessageIconActive = !isMessageIconActive"
    ></messageIcon>
  </div>
</template>

<script>
import messageIcon from "@/components/messageIcon.vue";
import buttonQuinary from "@/components/buttonQuinary.vue";
import buttonQuaternary from "@/components/buttonQuaternary.vue";
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin],
  data: function() {
    return {
      isMessageIconActive: false,
      currentMessageData: null,
      pageMessageData: [
        {
          text: "我懂了",
          imgUrl: require("@/assets/images/understand.png"),
          type: "understand",
          time: null
        },
        {
          text: "太快了",
          imgUrl: require("@/assets/images/frustrat.png"),
          type: "frustrat",
          time: null
        },
        {
          text: "聽不懂",
          imgUrl: require("@/assets/images/confuse.png"),
          type: "confuse",
          time: null
        },
        {
          text: "傳訊息",
          imgUrl: require("@/assets/images/typing.png"),
          type: "typing",
          time: null
        }
      ],
      currentMessage: [
        {
          text: "我懂了",
          imgUrl: require("@/assets/images/understand.png"),
          type: "understand",
          time: "2019-06-11 14:44"
        },
        {
          text: "已送出",
          imgUrl: require("@/assets/images/typing.png"),
          type: "typing",
          time: "2020-01-05 14:41"
        }
      ]
    };
  },
  methods: {
    addMessage(type) {
      this.isMessageIconActive = !this.isMessageIconActive;
      this.currentMessage.push(
        ...this.pageMessageData.filter(value => {
          return (
            value.type === type &&
            (value.time = this.$moment(new Date).format("YYYY-MM-DD HH:mm"))
          );
        })
      );
    }
  },
  components: {
    messageIcon,
    buttonQuinary,
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
  position: relative;
  margin-bottom: 50px;
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
.content {
  width: 100%;
}
</style>
