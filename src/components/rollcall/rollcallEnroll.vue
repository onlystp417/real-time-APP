<template>
  <div class="rollcall-enroll">
    <time class="rollcall-time">2020/1/5 13:28</time>
    <p class="rollcall-declare">正在點名！</p>
    <div class="rollcall-button">
      <buttonQuinary @click="$emit('click', {page: 'rollcallOntime'})">我到了</buttonQuinary>
    </div>
  </div>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
export default {
  components: {
    buttonQuinary
  }
};
</script>

<style lang="scss">
.rollcall {
  &-enroll {
    @include fontstyle(500, 40px, 1.2, $font, #727272);
    text-align: center;
    padding-top: 29.6vh;
  }
  &-time {
    @include fontstyle(500, 40px, 1.2, $font, #727272);
    text-align: center;
    display: block;
    margin-bottom: 26px;
  }
  &-button {
    margin: 0 auto;
    margin-top: 10.8vh;
    width: 48.6vw;
    max-width: 250px;
  }
}
</style>