<template>
  <section class="missionLevel">
    <div class="missionLevel-card" v-for="(item, index) in $store.getters.missionState" :key="index">
      <h3 class="missionLevel-title">任務{{ index | indexChineseDisplay }}</h3>
      <buttonPrimary @click="nextPage(index)" :class="{finished: item}">{{ item ? '已完成' : '開始'}}</buttonPrimary>
    </div>
  </section>
</template>

<script>
import mixin from "@/mixins/mixin"
import buttonPrimary from "@/components/buttonPrimary.vue";
export default {
  mixins: [mixin],
  methods:{
    nextPage(index){
      if(index === this.$store.getters.missionLevel) {
        this.$router.push({name: 'missionInstruction'})
        return
      }
      if(index < this.$store.getters.missionLevel) {
        alert('本關卡任務已完成，將顯示本關卡任務完成時間！')
        this.$router.push({name: 'missionComplete'})
        return
      }
      alert('請依序完成任務！')
    }
  },
  components: {
    buttonPrimary
  }
};
</script>

<style lang="scss" scoped>
.missionLevel {
  padding-top: 8.6vh;
  width: 80.5%;
  max-width: 475px;
  margin: auto;
  text-align: center;
  &-card {
    background: $white;
    margin-bottom: 21px;
    padding: 10px 0px 16px 0px;
    border-radius: 13px;
    box-shadow: #00000029 0px 1px 3px 0px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-title {
    @include fontstyle(500, 26px, 1.34, $font, #757575);
    margin-bottom: 9px;
    text-align: center;
  }
}
</style>

