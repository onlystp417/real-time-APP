<template>
  <div class="rollcall-ontime">
    <p
      @click="$emit('setTimer', {componentId: 'rollcallHome', missionTimeData:{level:0,section:1,nextLevel: 0, nextSection: 2}})"
      class="ontime-declare"
    >準時！</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("setPageReturn");
  },
  destroyed() {
    this.$store.commit("setPageReturn");
  }
};
</script>

<style lang="scss" scoped>
.rollcall {
  &-ontime {
    padding-top: 38.8vh;
    .ontime {
      &-declare {
        text-align: center;
        @include fontstyle(700, 40px, 1, $font, rgba(114, 114, 114, 1));
      }
    }
  }
}
</style>