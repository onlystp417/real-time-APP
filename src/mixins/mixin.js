export default{
  filters: {
    indexDisplay(index) {
      return index + 1;
    },
    indexChineseDisplay(index) {
      return (index + 1).toLocaleString("zh-u-nu-hanidec");
    }
  }
}