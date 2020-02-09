<template>
  <div class="rollcall-home">
    <!-- <title>點名紀錄</title> -->
    <section class="list-card">
      <h4>最近點名紀錄</h4>
      <buttonSecondary>查看</buttonSecondary>
    </section>
    <section class="list-card">
      <h4>準時</h4>
      <span>1</span>
    </section>
    <section class="list-card">
      <h4>遲到</h4>
      <span>2</span>
    </section>
    <section class="list-card">
      <h4>未到</h4>
      <span>0</span>
    </section>
    <section class="list-card">
      <h4>請假</h4>
      <span>0</span>
    </section>
    <section class="list-card">
      <h4>出席率</h4>
      <span>50％</span>
    </section>
    <buttonPrimaryBig>我要點名</buttonPrimaryBig>
  </div>
</template>

<script>
// import title from "@/components/title.vue";
import buttonPrimaryBig from "@/components/buttonPrimaryBig.vue";
import buttonSecondary from "@/components/buttonSecondary.vue";
export default {
  components: {
    buttonPrimaryBig,
    buttonSecondary
    // title
  }
};
</script>

<style lang="scss" scoped>
.rollcall-home {
  width: 379px;
  margin: auto;
  padding-top: 15px;
  // h3 {
  //   margin-bottom: 9px;
  //   @include fontstyle(700, 24px, 1.2, $font, #474747);
  // }
}
</style>