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
        <buttonQuaternary
          @click="isMessageIconActive = !isMessageIconActive"
        ></buttonQuaternary>
      </div>
    </div>
    <messageIcon
      v-show="isMessageIconActive"
      @setMessageIconActive="isMessageIconActive = !isMessageIconActive"
      @setTimer="setTimer"
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
    },
    setTimer(data) {
      this.addMessage(data.type)

      const { level, section, setTime } = data.missionTimeData;
      const {
        level: missionCurrentLevel,
        section: missionCurrentSection
      } = this.$store.getters.missionCurrentLevel;

      if (level === missionCurrentLevel && section === missionCurrentSection) {
        switch (setTime) {
          case "start":
            this.$_setMissionStartTimer(level, section);
            break;
          case "end":
            this.$_setMissionEndTimer(level, section);
            this.$router.push({ name: "missionComplete" });
            this.$store.commit(
              "setMissionCurrentCompleteLevel",
              this.$store.getters.missionCurrentLevel.level - 1
            );
            break;
          case "both":
            this.$_setMissionEndTimer(level, section);
            this.$_setMissionStartTimer(level, section + 1);
        }
      }
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
