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
    $_setMissionStartTimer() {
      this.$store.commit("setMissionLevelState", {
        missionTime: "startTime",
        missionDate: new Date()
      });
    },
    $_setMissionEndTimer() {
      this.$store.commit("setMissionLevelState", {
        missionTime: "endTime",
        missionDate: new Date()
      });
    }
  }
};
