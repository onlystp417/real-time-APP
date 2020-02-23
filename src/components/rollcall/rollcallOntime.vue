<template>
  <div class="rollcall-ontime">
    <p @click="$emit('click', {page: 'rollcallHome', missionLevelDetail: 1, missionLevelStateTime: 'endTime'})" class="ontime-declare">準時！</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rollcall {
  &-ontime {
    padding-top: 38.8vh;
    .ontime {
      &-declare {
        text-align: center;
        @include fontstyle(500, 40px, 1, $font, rgba(114, 114, 114, 1));
      }
    }
  }
}
</style>