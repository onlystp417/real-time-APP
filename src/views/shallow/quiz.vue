<template>
  <div class="quiz">
    <component @changeComponent="nextPage" @setTimer="setTimer" :is="componentId"></component>
  </div>
</template>

<script>
import quizQuestionAbbreviation from "@/components/quiz/quizQuestionAbbreviation.vue";
import quizQuestion from "@/components/quiz/quizQuestionTwo.vue";
import quizQuestionTwo from "@/components/quiz/quizQuestion.vue";
import quizPopover from "@/components/quiz/quizPopover.vue";
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin],
  data: function() {
    return {
      componentId: "quizQuestionAbbreviation"
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
    quizQuestionAbbreviation,
    quizQuestion,
    quizQuestionTwo,
    quizPopover
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>