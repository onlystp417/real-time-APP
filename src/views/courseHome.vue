<template>
  <div class="course-home">
    <section class="information">
      <componentTitle>課程資訊</componentTitle>
      <div class="information-card normal-card">
        <div>
          <h5>授課教師</h5>
          <p class="font-style">測試員-老師</p>
        </div>
        <div>
          <h5>修課人數</h5>
          <p class="font-style">54</p>
        </div>
        <div>
          <h5>修課日期</h5>
          <p class="font-style">108/9/10 ~ 109/1/10</p>
        </div>
      </div>
    </section>
    <section class="annousemenet">
      <componentTitle>公告</componentTitle>
      <div class="annousemenet-card normal-card">
        <h5 class="font-style">12/3停課一周</h5>
        <div class="button-wrapper">
          <buttonSecondary></buttonSecondary>
        </div>
        <p>
          因老師12/4要出國參加國際會議，
          <br />11/13，11/20，11/27三週上課時改......
        </p>
      </div>
      <div class="annousemenet-card normal-card">
        <h5 class="font-style">下周作業</h5>
        <div class="button-wrapper">
          <buttonSecondary></buttonSecondary>
        </div>
        <p>下周作業為顧客旅程地圖一張</p>
      </div>
    </section>
  </div>
</template>

<script>
import componentTitle from "@/components/componentTitle.vue";
import buttonSecondary from "@/components/buttonSecondary.vue";
export default {
  components: {
    componentTitle,
    buttonSecondary
  }
};
</script>

<style lang="scss" scoped>
.course-home {
  padding-top: 28px;
  .information {
    &-card {
      padding: 10px 16px 6.5px 16px;
      margin-bottom: 18px;
      > div + div {
        border-top: 1px solid #70707022;
      }
    }
    h5 {
      display: inline-block;
      @include fontstyle(100, 10px, 1, $font, #b7b7b7);
    }
    p {
      margin-bottom: 8.5px;
      margin-top: -4px;
    }
  }
  .annousemenet-card {
    position: relative;
    padding: 8px 16px 6px 16px;
    margin-bottom: 15px;
    h5 {
      margin-bottom: 9px;
    }
    p {
      height: 45px;
      @include fontstyle(300, 12px, 16px, $font, #474747);
    }
    .button-wrapper {
      position: absolute;
      top: 8px;
      right: 12px;
    }
  }
}

.font-style {
  @include fontstyle(700, 14px, 22px, $font, #474747);
}
</style>