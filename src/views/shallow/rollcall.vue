<template>
  <div class="rollcall">
    <component @changeComponent="nextPage" @setTimer="setTimer" :is="componentId"></component>
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
    nextPage(data) {
      this.componentId = data;
    },
    setTimer(data) {
      data.componentId && this.nextPage(data.componentId);

      const { level, section, setTime } = data.missionTimeData;
      const { level: missionCurrentLevel, section: missionCurrentSection } = this.$store.getters.missionCurrentLevel;

      if (level === missionCurrentLevel && section === missionCurrentSection) {
        switch (setTime) {
          case "start":
            this.$_setMissionStartTimer(level, section);
            break;
          case "end":
            this.$_setMissionEndTimer(level, section);
            this.$router.push({ name: "missionComplete" });
            console.log('現在結束任務'+ this.$store.getters.missionCurrentLevel.level)
            this.$store.commit('setMissionCurrentCompleteLevel', this.$store.getters.missionCurrentLevel.level - 1);
            break;
          case "both":
            this.$_setMissionEndTimer(level, section);
            this.$_setMissionStartTimer(level, section + 1);
        }
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
