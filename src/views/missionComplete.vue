<template>
  <section class="missionComplete">
    <h2 class="missionComplete-title">任務{{ $store.getters.chineseMissionLevel }}完成！</h2>
    <section class="missionComplete-card">
      <h3 class="card-title">
        <span>編號：{{ $store.getters.userSymbol }}</span>
        {{ $store.getters.name }}
      </h3>
      <p
        class="card-text"
        v-for="(item, index) in $store.getters.messionMessage"
        :key="index"
      >任務{{ $store.getters.missionLevel }}-{{ index }}：{{ item.minute }}分{{item.second}}秒</p>
    </section>
    <div class="missionComplete-button">
      <buttonPrimary @click="$router.push({name: 'missionLevel'})">完成</buttonPrimary>
    </div>
  </section>
</template>

<script>
import buttonPrimary from "@/components/buttonPrimary.vue";
export default {
  components: {
    buttonPrimary
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.missionComplete {
  width: 360px;
  padding-top: 111px;
  margin: 0 auto;
  &-title {
    margin-bottom: 18px;
    text-align: center;
    @include fontstyle(900, 26px, 1.15, $font, #757575);
  }
  &-card {
    background-color: $white;
    border-radius: 13px;
    padding: 26px 37px 34px 37px;
    .card {
      &-title {
        text-align: center;
        @include fontstyle(900, 20px, 1.15, $font, #757575);
        margin-bottom: 23px;
        span:first-child {
          margin-right: 12px;
        }
      }
      &-text {
        text-align: center;
        @include fontstyle(700, 16px, 2, $font, #757575);
      }
    }
  }
  &-button {
    margin: 42px auto 0px auto;
  }
}
</style>
