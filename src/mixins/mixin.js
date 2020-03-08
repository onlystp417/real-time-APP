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
    $_setMissionStartTimer(level, section) {
      this.$store.commit("setMissionLevel", {
        missionTime: "startTime",
        missionDate: new Date(),
        level,
        section
      });
    },
    $_setMissionEndTimer(level, section) {
      this.$store.commit("setMissionLevel", {
        missionTime: "endTime",
        missionDate: new Date(),
        level,
        section
      });
    }
  }
};
