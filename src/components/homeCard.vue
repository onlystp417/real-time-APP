<template>
  <div class="home-card">
    <h2 class="card-title">
      <slot name="title">預設標題</slot>
    </h2>
    <div class="card">
      <div
        class="card-column"
        v-for="(items, index) in usersDisplay(userCompleteDepth)"
        :key="index"
      >
        <p>震動{{ index | $_indexChineseDisplay }}</p>
        <div class="card-button">
          <button
            @click.prevent="$emit('click', itemindex + index * 24)"
            v-for="(item, itemindex) in items"
            :key="itemindex"
            :class="{'finished': item.value }"
          >{{ item.index | $_indexDisplay }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from "@/mixins/mixin";
export default {
  // mixin 中包含了 filter，看得出來嗎？
  mixins: [mixin],
  props: {
    userCompleteDepth: Array
  },
  methods: {
    // 命名要命名什麼好，究竟是用人數還是用原始資料名稱
    usersDisplay(item) {
      return item.reduce(
        (accumulator, currentValue, currentIndex) => {
          if (currentIndex < 24) {
            accumulator[0].push({ value: currentValue, index: currentIndex });
            return accumulator;
          }
          if (24 <= currentIndex && currentIndex < 48) {
            accumulator[1].push({ value: currentValue, index: currentIndex });
            return accumulator;
          }
          if (48 <= currentIndex && currentIndex < 72) {
            accumulator[2].push({ value: currentValue, index: currentIndex });
            return accumulator;
          }
          // 疑惑這一點，為什麼要再回傳
          return accumulator;
        },
        [[], [], []]
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  &-card {
    background-color: #fff;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px 0px;
    padding: 8px 16px 14px 16px;
    margin-top: 15px;
    .card {
      display: flex;
      &-title {
        color: $light-blue;
        margin-bottom: 8px;
        text-align: left;
      }
      &-column {
        background-color: $light-blue;
        padding: 2px 10px 3px 10px;
        flex: 0 1 30%;
        border-radius: 11px;
        + .card-column {
          margin-left: 5%;
        }
        p {
          text-align: center;
          margin-bottom: 2px;
          @include fontstyle(300, 12px, 1, $font, #fff);
        }
      }
      &-button {
        align-content: space-between;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 536px;
        button {
          width: 40px;
          height: 40px;
          background-color: #fff;
          border: 2px solid #ff7d7d;
          color: #ff7d7d;
          border-radius: 40px;
          margin-bottom: 3px;
          &.finished {
            color: #fff;
            background-color: #ff7d7d;
          }
          &:nth-child(n + 13) {
            color: #34a0d8;
            border-color: #34a0d8;
            &.finished {
              color: #fff;
              background-color: #34a0d8;
            }
          }
        }
      }
    }
  }
}
</style>