<template>
  <div class="rollcall-record">
    <h2 class="record-title">點名紀錄</h2>
    <ul>
      <li>
        <time>2020/01/05 13:00</time>
        <span class="record-ontime">準時</span>
      </li>
      <li>
        <time>2020/01/04 18:00</time>
        <span class="record-ontime">準時</span>
      </li>
      <li>
        <time>2020/01/03 10:00</time>
        <span class="record-ontime">準時</span>
      </li>
      <li>
        <time>2020/01/02 15:00</time>
        <span class="record-late">遲到</span>
      </li>
      <li>
        <time>2020/12/30 13:00</time>
        <span class="record-ontime">準時</span>
      </li>
    </ul>
    <div class="record-button">
      <buttonQuinary @click="$emit('rollcallRecordNextPageHome', 'rollcallHome')">確認</buttonQuinary>
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

<style lang="scss" scoped>
.rollcall-record {
  > ul {
    background: $white;
    box-shadow: 0px 3px 6px #00000029;
    margin-bottom: 46px;
    padding: 17.5px 33px 4.5px 23px;
    list-style: none;
  }
  li {
    margin-bottom: 20px;
  }
  time {
    display: inline-block;
    width: 70%;
    @include fontstyle(500, 18px, 22px, $font, #474747);
  }
  span {
    display: inline-block;
    width: 30%;
    text-align: right;
  }
  .record {
    &-title {
      margin-bottom: 9px;
      @include fontstyle(500, 24px, 1.2, $font, #474747);
    }
    &-ontime {
      @include fontstyle(500, 18px, 22px, $font, $success);
    }
    &-late {
      @include fontstyle(500, 18px, 22px, $font, $warning);
    }
    &-button {
      margin: 0 auto;
      margin-top: 6.2vh;
      width: 48.6vw;
      max-width: 250px;
    }
  }
}
</style>