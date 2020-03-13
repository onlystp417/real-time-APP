<template>
  <section class="missionComplete">
    <h2 class="missionComplete-title">任務{{ $store.getters.missionCompleteLevelCache | $_indexChineseDisplay }}完成！</h2>
    <section class="missionComplete-card">
      <h3 class="card-title">
        <span>編號：{{ $store.getters.userSymbol }}</span>
        {{ $store.getters.name }}
      </h3>
      <p class="card-text"
         v-for="(item, index) in $store.getters.setMissionCurrentTime($store.getters.missionCompleteLevelCache)"
         :key="index">
        任務{{ $store.getters.missionCompleteLevel.level }}-{{ index }}：{{
        item.minute
        }}分{{ item.second }}秒
      </p>
    </section>
    <div class="missionComplete-button">
      <buttonPrimary @click="nextPage">完成</buttonPrimary>
    </div>
  </section>
</template>

<script>
  import buttonPrimary from '@/components/buttonPrimary.vue';
  import mixin from '@/mixins/mixin';

  export default {
    mixins: [mixin],
    components: {
      buttonPrimary
    },
    created() {},
    methods: {
      nextPage() {
        if (
          this.$store.getters.missionCompleteLevel.level === 3 &&
          this.$store.getters.missionCompleteLevel.section === 4 &&
          this.$store.getters.missionDepth
        ) {
          this.$router.push({ name: 'missionCompleteText' });
          return;
        }
        if (
          this.$store.getters.missionCompleteLevel.level ===
          this.$store.getters.missionCompleteLevelCache
        ) {
          this.$store.commit('setMissionCompleteLevel', {
            level: this.$store.getters.missionCompleteLevel.level + 1,
            section: 0
          });
        }
        this.$router.push({ name: 'missionLevel' });
      }
    }
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
      text-align: center;
    }
  }
</style>
