<template>
  <section class="home">
    <div class="home-card">
      <h2 class="card-title">資訊架構-淺</h2>
      <div class="card">
        <div
          class="card-column"
          v-for="(items, index) in missionLevelDisplay(usersCompleteShallow)"
          :key="index"
        >
          <p>震動{{ index | indexChineseDisplay }}</p>
          <div class="card-button">
            <button
              @click.prevent="signIn({index: item.index, level: 'shallow'})"
              v-for="(item, itemindex) in items"
              :key="itemindex"
              :class="{'finished': item.value }"
            >{{ item.index | indexDisplay }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="home-card">
      <h2 class="card-title">資訊架構-深</h2>
      <div class="card">
        <div
          class="card-column"
          v-for="(items, index) in missionLevelDisplay(usersCompleteDeep)"
          :key="index"
        >
          <p>震動{{ index | indexChineseDisplay }}</p>
          <div class="card-button">
            <button
              @click.prevent="signIn({index: item.index, level: 'deep'})"
              v-for="(item, itemindex) in items"
              :key="itemindex"
              :class="{'finished': item.value }"
            >{{ item.index | indexDisplay }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    // 還在疑惑從遠端來的資料格式是否需要開頭命名區別，這邊是打印出遠端資料並且分成畫面視覺格式
    usersCompleteShallow() {
      // console.log(this.$store.state.usersComplete)
      return this.$store.state.usersComplete.usersComplete.shallow;
    },
    usersCompleteDeep() {
      console.log(this.$store.state.usersComplete.usersComplete.deep);
      return this.$store.state.usersComplete.usersComplete.deep;
    }
  },
  filters: {
    indexDisplay(index) {
      return index + 1;
    },
    indexChineseDisplay(index) {
      return (index + 1).toLocaleString("zh-u-nu-hanidec");
    }
  },
  methods: {
    signIn(item) {
      // 登入的時候設置性別
      this.$store.commit("setGender", item);
      // 登入的時候設置 userID
      this.$store.commit("setId", item);
      // 登入的時候設置深淺
      this.$store.commit("setMissionDepth", item);
      // 切換路由尚未綁定 ID 名稱
      this.$router.push({name: 'missionHome'})
    },
    missionLevelDisplay(item) {
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
  width: 93%;
  max-width: 383px;
  margin: 0 auto;
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