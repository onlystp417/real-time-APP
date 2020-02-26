<template>
  <div class="course">
      <component
        @courseHomeStoreTime="courseHomeStoreTime"
        @click="missionProgress"
        :is="componentId"
      ></component>
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
  created() {
    this.$_taskTimer;
  },
  methods: {
    courseHomeStoreTime() {
      if (
        this.$store.state.user.missionLevel === 0 &&
        this.$store.state.user.missionLevelDetail === 2
      ) {
        this.$_setMissionEndTimer();
        this.$store.commit("setMissionLevelDetail", 3);
        this.$_setMissionStartTimer();
      }
    },
    missionProgress(data) {
      data.page && (this.componentId = data.page);
      if (this.$store.getters.missionLevel !== 0) return;
      data.missionLevelStateTime === "endTime" && this.$_taskTimer();
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