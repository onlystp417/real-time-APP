<template>
  <div class="private-message">
    <div class="message-list">
      <section class="private-message-card" v-for="(item, index) in currentMessage" :key="index">
        <img :src="item.imgUrl" alt="smile face" />
        <div>
          <p>{{ item.text }}</p>
          <span>已送出</span>
          <time>{{ item.time }}</time>
        </div>
      </section>
      <div class="private-Message-button">
        <buttonQuaternary @click="
        isMessageIconActive = !isMessageIconActive
        "></buttonQuaternary>
      </div>
    </div>
    <messageIcon
      v-show="isMessageIconActive"
      @setMessageIconActive="
      isMessageIconActive = !isMessageIconActive;"
      @addIconMessage="addMessage"
      @addTypingMessage="
        isMessageTypingActive = !isMessageTypingActive;
        isMessageIconActive = !isMessageIconActive;
      "
    ></messageIcon>
    <messageTyping
      @setMessageIconActive="
    isMessageTypingActive = !isMessageTypingActive"
      v-show="isMessageTypingActive"
    >
      <template v-slot:title>
        <p>傳送訊息</p>
      </template>
      <template v-slot:input>
        <textarea rows="8" class="content" v-model="currentMessageData" placeholder="輸入文字或上傳圖片給老師" />
      </template>
      <template v-slot:button>
        <buttonQuinary @click="messageTypingNextPage">傳送</buttonQuinary>
      </template>
    </messageTyping>
  </div>
</template>

<script>
import messageIcon from "@/components/messageIcon.vue";
import messageTyping from "@/components/messageTyping.vue";
import buttonQuinary from "@/components/buttonQuinary.vue";
import buttonQuaternary from "@/components/buttonQuaternary.vue";
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin],
  data: function() {
    return {
      isMessageIconActive: false,
      isMessageTypingActive: false,
      currentMessageData: null,
      pageMessageData: [
        {
          text: "我懂了",
          imgUrl: require("@/assets/images/understand.png"),
          type: "understand",
          time: null
        },
        {
          text: "聽不懂",
          imgUrl: require("@/assets/images/confuse.png"),
          type: "confuse",
          time: null
        },
        {
          text: "太快了",
          imgUrl: require("@/assets/images/frustrat.png"),
          type: "frustrat",
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
            (value.time = new Date()
              .toLocaleString({ hourCycle: "h24" })
              .replace(/\//g, "-")
              .replace(/下午||早上||中午/g, "")
              .replace(/(?!\d{1,}:\d{1,}):\d{1,}/, "")).replace(
              /\s(?:\d:)/,
              "0"
            )
          );
        })
      );
      // console.log(this.currentMessage);
    },
    setMessageTypingAndIconActive() {
      this.isMessageIconActive = !this.isMessageIconActive;
      this.isMessageTypingActive = !this.isMessageTypingActive;
    },
    addTypingMessage() {
      this.currentMessage.push(
        ...this.pageMessageData
          .filter(value => value.type === "typing")
          .map(value => {
            value.text = this.currentMessageData;
            value.time = new Date()
              .toLocaleString({ hourCycle: "h24" })
              .replace(/\//g, "-")
              .replace(/下午||早上||中午/g, "")
              .replace(/(?!\d{1,}:\d{1,}):\d{1,}/, "");
            return value;
          })
      );
      this.currentMessageData = null;
    },
    messageTypingNextPage() {
      this.addTypingMessage();
      this.isMessageTypingActive = !this.isMessageTypingActive;
      if (
        this.$store.state.user.missionLevel === 0 &&
        this.$store.state.user.missionLevelDetail === 3
      ) {
        !this.currentMessageData && this.$_setMissionEndTimer();
        alert('任務一已完成，將跳轉回任務關卡頁面。')
        this.$router.push({name: 'missionComplete'})
      }
    }
  },
  components: {
    messageIcon,
    messageTyping,
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
.content {
  width: 100%;
}
// z-index 問題暫時無法解決
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .1s ease;
// }
// .fade-enter, .fade-leave-to{
//   opacity: 0;
// }
</style>