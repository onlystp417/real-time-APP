<template>
  <div class="rollcall-record">
    <componentTitle>點名紀錄</componentTitle>
    <ul class="normal-card">
      <li>
        <time>2020/01/05 13:00</time>
        <span class="rollcall-ontime">準時</span>
      </li>
      <li>
        <time>2020/01/04 18:00</time>
        <span class="rollcall-ontime">準時</span>
      </li>
      <li>
        <time>2020/01/03 10:00</time>
        <span class="rollcall-ontime">準時</span>
      </li>
      <li>
        <time>2020/01/02 15:00</time>
        <span class="rollcall-late">遲到</span>
      </li>
      <li>
        <time>2020/12/30 13:00</time>
        <span class="rollcall-ontime">準時</span>
      </li>
    </ul>
    <buttonPrimaryBig>確認</buttonPrimaryBig>
  </div>
</template>

<script>
import componentTitle from "@/components/componentTitle.vue";
import buttonPrimaryBig from "@/components/buttonPrimaryBig.vue";
export default {
  components: {
    componentTitle,
    buttonPrimaryBig
  }
};
</script>

<style lang="scss" scoped>
.rollcall-record {
  padding-top: 15px;
  > ul {
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
  .rollcall-ontime {
    @include fontstyle(500, 18px, 22px, $font, $success);
  }
  .rollcall-late {
    @include fontstyle(500, 18px, 22px, $font, $warning);
  }
}
</style>