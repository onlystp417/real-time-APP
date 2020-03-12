export default {
  filters: {
    $_indexDisplay(index) {
      return index + 1;
    },
    $_indexChineseDisplay(index) {
      return (index + 1).toLocaleString("zh-u-nu-hanidec");
    }
  },
  methods: {
    $_nextPage(data) {
      this.componentId = data;
    },
    $_setTimer(data) {
      data.componentId && this.$_nextPage(data.componentId);

      const { level, section, nextLevel, nextSection } = data.missionTimeData;
      const {
        level: missionCompleteLevel,
        section: missionCompleteSection
      } = this.$store.getters.missionCompleteLevel;

      if (
        level === missionCompleteLevel &&
        section === missionCompleteSection
      ) {
        let levelData = {
          level: nextLevel,
          section: nextSection
        };
        this.$store.commit("setMissionCompleteLevel", levelData);
        this.$store.commit("setMissionLevelTime", levelData);
        if (data.missionTimeData.complete) {
          this.$router.push({ name: "missionComplete" });
          this.$store.commit(
            "setMissionCompleteLevelCache",
            this.$store.getters.missionCompleteLevel.level
          );
        }
      }
    }
  }
};
