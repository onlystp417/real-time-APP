<template>
  <div class="rollcall-home">
    <section class="list-card normal-card">
      <h4>最近點名紀錄</h4>
      <div class="button-wrap">
        <buttonSecondary></buttonSecondary>
      </div>
    </section>
    <section class="list-card normal-card">
      <h4>準時</h4>
      <span>1</span>
    </section>
    <section class="list-card normal-card">
      <h4>遲到</h4>
      <span>2</span>
    </section>
    <section class="list-card normal-card">
      <h4>未到</h4>
      <span>0</span>
    </section>
    <section class="list-card normal-card">
      <h4>請假</h4>
      <span>0</span>
    </section>
    <section class="list-card normal-card">
      <h4>出席率</h4>
      <span>50％</span>
    </section>
    <buttonPrimaryBig>我要點名</buttonPrimaryBig>
  </div>
</template>

<script>
import componentTitle from "@/components/componentTitle.vue";
import buttonPrimaryBig from "@/components/buttonPrimaryBig.vue";
import buttonSecondary from "@/components/buttonSecondary.vue";
export default {
  components: {
    buttonPrimaryBig,
    buttonSecondary,
    componentTitle
  }
};
</script>

<style lang="scss" scoped>
.rollcall-home {
  padding-top: 15px;
}

.button-wrap {
  display: inline-block;
  width: 25%;
  text-align: right;
}

.primary-button-big {
  margin-top: 48px;
}
</style>