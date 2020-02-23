<template>
  <div class="rollcall">
    <component @click="missionProgress" :is="componentId"></component>
  </div>
</template>

<script>
import rollcallHome from "@/components/rollcall/rollcallHome.vue";
import rollcallEnroll from "@/components/rollcall/rollcallEnroll.vue";
import rollcallOntime from "@/components/rollcall/rollcallOntime.vue";
import rollcallRecord from "@/components/rollcall/rollcallRecord.vue";
export default {
  data: function() {
    return {
      componentId: "rollcallHome"
    };
  },
  methods: {
    missionProgress(data) {
      this.componentId = data.page;
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