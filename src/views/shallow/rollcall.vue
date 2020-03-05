<template>
  <div class="rollcall">
    <!-- 當畫面中有許多切換的元件，如何去判定綁定的諸多事件屬於哪個元件？ -->
    <!-- 這個方法是不是不好的方法，看起來清楚嗎 -->
    <component
      @rollcallHomeNextPageEnroll="rollcallHomeNextPageEnroll"
      @rollcallHomeNextPageRecord="rollcallHomeNextPageRecord"
      @rollcallEnrollNextPageOntime="rollcallEnrollNextPageOntime"
      @rollcallOnTimeNextPageHome="rollcallOnTimeNextPageHome"
      @rollcallRecordNextPageHome="rollcallOnTimeNextPageHome"
      :is="componentId"
    ></component>
  </div>
</template>

<script>
import rollcallHome from "@/components/rollcall/rollcallHome.vue";
import rollcallEnroll from "@/components/rollcall/rollcallEnroll.vue";
import rollcallOntime from "@/components/rollcall/rollcallOntime.vue";
import rollcallRecord from "@/components/rollcall/rollcallRecord.vue";
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin],
  data: function() {
    return {
      componentId: "rollcallHome"
    };
  },
  methods: {
    rollcallHomeNextPageEnroll(data) {
      this.componentId = data;
    },
    rollcallHomeNextPageRecord(data) {
      this.componentId = data;
      if (
        this.$store.state.user.missionLevel === 0 &&
        this.$store.state.user.missionLevelDetail === 1
      ) {
        this.$_setMissionStartTimer();
      }
    },
    rollcallEnrollNextPageOntime(data) {
      this.componentId = data;
      // if (
      //   this.$store.state.user.missionLevel === 0 &&
      //   this.$store.state.user.missionLevelDepth === 1
      // ) {
      //   this.$_setMissionStartTimer();
      // }
    },
    rollcallRecordNextPageOntime(data) {
      this.componentId = data;
      // if (
      //   this.$store.state.user.missionLevel === 0 &&
      //   this.$store.state.user.missionLevelDepth === 1
      // ) {
      //   this.$_setMissionStartTimer();
      // }
    },
    rollcallOnTimeNextPageHome(data) {
      this.componentId = data;
      if (
        this.$store.state.user.missionLevel === 0 &&
        this.$store.state.user.missionLevelDetail === 1
      ) {
        this.$_setMissionEndTimer();
        this.$store.commit("setMissionLevelDetail", 2);
        this.$_setMissionStartTimer();
      }
    }
  },
  components: {
    rollcallHome,
    rollcallEnroll,
    rollcallOntime,
    rollcallRecord
  }
};
</script>

<style lang="scss" scoped>
.rollcall {
  padding-top: 15px;
  margin: 0 auto;
  width: 92%;
  max-width: 500px;
}
</style>