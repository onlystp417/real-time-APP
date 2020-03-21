<template>
  <div class="home-card">
    <section class="card-title">
      <h2><slot name="title">預設標題</slot></h2>
      <button @click="$emit('deleteData', userCompleteDepth)" class="card-deleteButton">清除資料</button>
    </section>
    <div class="card">
      <div class="card-column"
           v-for="(items, index) in usersDisplay(userCompleteDepth.data)"
           :key="index">
        <p>震動{{ index | $_indexChineseDisplay }}</p>
        <div class="card-button">
          <button v-for="(item, innerIndex) in items"
                  @click="dataCalcute(item, index, innerIndex)"
                  :key="innerIndex"
                  :class="{'finished': item.value }">{{ userCompleteDepth.depth === 'shallow' ? item.index + 72 : item.index | $_indexDisplay }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '@/mixins/mixin';

  export default {
    // mixin 中包含了 filter，看得出來嗎？
    mixins: [mixin],
    props: {
      userCompleteDepth: Object
    },
    methods: {
      usersDisplay(item) {
        return item.reduce(
          (accumulator, currentValue, currentIndex) => {
            let index = Math.floor(currentIndex / 24);
            accumulator[index].push({ value: currentValue, index: currentIndex });
            return accumulator;
          },
          [[], [], []]
        );
      },
      dataCalcute(item, index, innerIndex) {
        console.log(this);
        let result = {
          number: null,
          complete: item.value,
          depth: this.userCompleteDepth.depth
        };
        if (this.userCompleteDepth.depth === 'shallow')
          result.number = innerIndex + index * 24 + 72;
        if (this.userCompleteDepth.depth === 'deep')
          result.number = innerIndex + index * 24;
        this.$emit('click', result);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    &-card {
      background-color: #fff;
      border-radius: 13px;
      box-shadow: #00000029 0px 3px 6px 0px;
      padding: 8px 16px 14px 16px;
      margin-top: 15px;
      & + & {
        margin-bottom: 15px;
      }
      .card {
        display: flex;
        &-title {
          color: $light-blue;
          margin-bottom: 8px;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &-deleteButton {
          display: block;
          width: 90px;
          background-color: #fff;
          border: 1px solid;
          padding: 6px 0;
          @include fontstyle(300, 16px, 1, $font, #34a0d8);
          border-radius: 22px;
        }
        &-column {
          background-color: $light-blue;
          padding: 2px 5px 3px 5px;
          flex: 0 1 30%;
          border-radius: 11px;
          + .card-column {
            margin-left: 5%;
          }
          p {
            text-align: center;
            margin-bottom: 1.5px;
            @include fontstyle(300, 12px, 1, $font, #fff);
          }
        }
        &-button {
          align-content: space-around;
          justify-content: space-around;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 536px;
          button {
            display: block;
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