<template>
  <section class="missionComplete">
    <h3>完成</h3>
    <div class="missionComplete-button">
      <buttonPrimary @click="nextPage">繼續實驗</buttonPrimary>
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
    methods: {
      nextPage() {
        this.$store.commit(
          'storeCurrentData',
          this.$store.state.user.missionDepth
        );
        this.storeDataToLocalStorage();
        this.$router.push({ name: 'home' });
        this.$store.commit('clearUserCacheData');
      },
      storeDataToLocalStorage() {
        localStorage.setItem(
          'shallow',
          JSON.stringify(this.$store.state.usersComplete.usersComplete.shallow)
        );
        localStorage.setItem(
          'deep',
          JSON.stringify(this.$store.state.usersComplete.usersComplete.deep)
        );
        localStorage.setItem(
          'usersShallowData',
          JSON.stringify(this.$store.state.usersComplete.usersShallowData)
        );
        localStorage.setItem(
          'usersDeepData',
          JSON.stringify(this.$store.state.usersComplete.usersDeepData)
        );
      }
    }
  };
</script>

<style lang="scss" scoped>
  .missionComplete {
    h3 {
      text-align: center;
      margin-top: 179px;
      margin-bottom: 132px;
      @include fontstyle(500, 72px, 1.2, $font, #474747);
    }
    &-button {
      margin: 42px auto 0px auto;
      text-align: center;
    }
  }
</style>
