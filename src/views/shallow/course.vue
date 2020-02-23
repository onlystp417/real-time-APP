<template>
  <div class="course">
    <keep-alive>
      <component @click="missionProgress" :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import courseHome from "@/components/course/courseHome.vue";
import courseSuspension from "@/components/course/courseSuspension.vue";
import courseHomework from "@/components/course/courseHomework.vue";

export default {
  data: function() {
    return {
      componentId: "courseHome"
    };
  },
  methods: {
    missionProgress(data) {
      if (data.page) this.componentId = data.page;
      if (this.$store.getters.missionLevel !== 0) return;
      if (data.missionLevelStateTime === "endTime") {
        const TIME = new Date();
        this.$store.commit("setMissionLevelDetail", data.missionLevelDetail);
        this.$store.commit("setMissionLevelState", {
          missionTime: data.missionLevelStateTime,
          missionDate: TIME
        });
        this.$store.commit(
          "setMissionLevelDetail",
          data.missionLevelDetail + 1
        );
        this.$store.commit("setMissionLevelState", {
          missionTime: data.missionLevelStateTime && "startTime",
          missionDate: TIME
        });
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