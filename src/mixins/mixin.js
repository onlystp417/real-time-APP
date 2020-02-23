export default {
  filters: {
    $_indexDisplay(index) {
      return index + 1;
    },
    $_indexChineseDisplay(index) {
      return (index + 1).toLocaleString("zh-u-nu-hanidec");
    }
  }
};
