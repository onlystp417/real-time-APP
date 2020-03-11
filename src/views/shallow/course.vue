<template>
  <div class="course">
    <component @changeComponent="nextPage" @setTimer="setTimer" :is="componentId"></component>
  </div>
</template>

<script>
import courseHome from "@/components/course/courseHome.vue";
import courseSuspension from "@/components/course/courseSuspension.vue";
import courseHomework from "@/components/course/courseHomework.vue";

import mixin from "@/mixins/mixin";
export default {
  mixins: [mixin],
  data: function() {
    return {
      componentId: "courseHome"
    };
  },
  methods: {
    nextPage(data) {
      this.componentId = data;
    },
    setTimer(data) {
      data.componentId && this.nextPage(data.componentId);

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
    courseHome,
    courseSuspension,
    courseHomework
  }
};
</script>

<style lang="scss" scoped>
.course {
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>
