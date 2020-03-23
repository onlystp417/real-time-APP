<template>
  <div class="missionStart">
    <a @click.prevent="nextPage">
      <div>即時反饋系統APP · 現在</div>
      <div>輕觸即可開啓課程</div>
    </a>
  </div>
</template>

<script>
import mixin from "@/mixins/mixin";
export default {
  mixins: [mixin],
  methods: {
    nextPage() {
      this.$store.commit("setMissionCompleteLevel", {
        level: this.$store.getters.missionCompleteLevel.level,
        section: 1
      });
      this.$store.commit("setMissionLevelTime", {
        level: this.$store.getters.missionCompleteLevel.level,
        section: 1
      });
      this.setNextRouter();
    },
    setNextRouter() {
      if (this.$store.getters.missionDepth === "deep") {
        this.$router.push({ name: "rollcallAndQuiz" });
      } else {
        this.$router.push({ name: "rollcall" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#app .missionStart {
  height: 100vh;
  background-color: #1b4084;
  background: url(../assets/images/desktop_tiny.png) top left/cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  a {
    display: block;
    margin: 50vh auto 0px auto;
    width: 97%;
    max-width: 510px;
    div {
      padding-left: 17px;
    }
    div:first-child {
      background: $light-blue;
      @include fontstyle(300, 12px, 2.5, $font, $white);
      border-radius: 8px 8px 0px 0px;
    }
    div:last-child {
      background: #fff;
      border-radius: 0px 0px 8px 8px;
      @include fontstyle(700, 16px, 3, $font, #474747);
    }
  }
}
</style>
