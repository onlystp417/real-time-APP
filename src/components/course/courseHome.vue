<template>
  <div class="courseHome">
    <section class="courseHome-information">
      <h2 class="courseHome-title">課程資訊</h2>
      <div class="information-card">
        <div>
          <h5>授課教師</h5>
          <p>測試員-老師</p>
        </div>
        <div
          @click="$emit('setTimer', {componentId: null, missionTimeData:{ level:3, section:2,nextLevel:3,nextSection:3 }})"
        >
          <h5>修課人數</h5>
          <p>54</p>
        </div>
        <div>
          <h5>修課日期</h5>
          <p>108/9/10 ~ 109/1/10</p>
        </div>
      </div>
    </section>
    <section class="courseHome-annousemenet">
      <h2 class="courseHome-title">公告</h2>
      <div class="annousemenet-card">
        <h5>12/3停課一周</h5>
        <div class="button-wrapper">
          <buttonSecondary @click="$emit('changeComponent', 'courseSuspension')"></buttonSecondary>
        </div>
        <p>
          因老師12/4要出國參加國際會議，
          <br />11/13，11/20，11/27三週上課時改......
        </p>
      </div>
      <div class="annousemenet-card">
        <h5>下周作業</h5>
        <div class="button-wrapper">
          <buttonSecondary @click="$emit('changeComponent', 'courseHomework')"></buttonSecondary>
        </div>
        <p>下周作業為顧客旅程地圖一張</p>
      </div>
    </section>
  </div>
</template>

<script>
import buttonSecondary from "@/components/buttonSecondary.vue";
export default {
  components: {
    buttonSecondary
  }
};
</script>

<style lang="scss" scoped>
.courseHome {
  padding-top: 13px;
  &-title {
    margin-bottom: 9px;
    @include fontstyle(500, 24px, 1.2, $font, #474747);
  }
  &-information {
    .information-card {
      background: $white;
      box-shadow: 0px 3px 6px #00000029;
      padding: 10px 16px 6.5px 16px;
      margin-bottom: 18px;
      > div + div {
        border-top: 1px solid #70707022;
      }
    }
    h5 {
      display: inline-block;
      margin-bottom: 8px;
      @include fontstyle(100, 10px, 1, $font, #b7b7b7);
    }
    p {
      margin-bottom: 8.5px;
      margin-top: -4px;
    }
  }
  &-annousemenet {
    .annousemenet-card {
      position: relative;
      padding: 8px 16px 6px 16px;
      margin-bottom: 15px;
      background: $white;
      box-shadow: 0px 3px 6px #00000029;
      h5 {
        margin-bottom: 9px;
        @include fontstyle(700, 14px, 22px, $font, #474747);
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
}
</style>