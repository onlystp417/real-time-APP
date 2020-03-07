<template>
  <section class="rollcallHome">
    <ul>
      <li class="rollcallHome-item">
        <h4>最近點名紀錄</h4>
        <div class="item-wrap">
          <buttonSecondary
            @click="$emit('changeComponent', 'rollcallRecord')"
          ></buttonSecondary>
        </div>
      </li>
      <li class="rollcallHome-item">
        <h4>準時</h4>
        <span>1</span>
      </li>
      <li class="rollcallHome-item">
        <h4>遲到</h4>
        <span>2</span>
      </li>
      <li class="rollcallHome-item">
        <h4>未到</h4>
        <span>0</span>
      </li>
      <li class="rollcallHome-item">
        <h4>請假</h4>
        <span>0</span>
      </li>
      <li class="rollcallHome-item" @click="$emit('setTimer', {componentId: null, missionTimeData:{level:2,section:2, setTime: 'both'}})">
        <h4>出席率</h4>
        <span>50％</span>
      </li>
    </ul>
    <div class="rollcallHome-button">
      <buttonQuinary @click="$emit('changeComponent', 'rollcallEnroll')"
        >我要點名</buttonQuinary
      >
    </div>
  </section>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
import buttonSecondary from "@/components/buttonSecondary.vue";
export default {
  components: {
    buttonQuinary,
    buttonSecondary
  }
};
</script>

<style lang="scss" scoped>
.rollcallHome {
  &-item {
    .item-wrap {
      display: inline-block;
      width: 25%;
      text-align: right;
    }
    display: block;
    background: $white;
    box-shadow: 0px 3px 6px #00000029;
    margin-bottom: 13px;
    padding: 12.5px 10px 12.5px 15px;
    h4 {
      display: inline-block;
      width: 75%;
      @include fontstyle(500, 18px, 1.4, $font, #474747);
    }
    span {
      display: inline-block;
      width: 25%;
      text-align: right;
      padding-right: 14px;
      @include fontstyle(500, 18px, 22px, $font, #474747);
    }
  }
  &-button {
    text-align: center;
    margin-top: 48px;
  }
}
</style>
