<template>
  <section class="home">
    <homeCard
      @click="signIn({ index: parseInt($event), level: 'shallow' })"
      :userCompleteDepth="$store.getters.usersCompleteShallow"
    >
      <template v-slot:title>資訊架構-淺</template>
    </homeCard>
    <homeCard
      @click="signIn({ index: parseInt($event), level: 'deep' })"
      :userCompleteDepth="$store.getters.usersCompleteDeep"
    >
      <template v-slot:title>資訊架構-深{{$store.missionLevelChange}}</template>
    </homeCard>
  </section>
</template>

<script>
import homeCard from "@/components/homeCard";
export default {
  methods: {
    signIn(item) {
      // 登入的時候設置性別
      this.$store.commit("setGender", item);
      // 登入的時候設置 userID
      this.$store.commit("setID", item);
      // 登入的時候設置深淺
      this.$store.commit("setMissionDepth", item);
      // 登入的時候設置震動秒數
      this.$store.commit("setJitterSeconds", item);
      // 切換路由尚未綁定 ID 名稱
      this.$router.push({ name: "missionHome" });
    }
  },
  components: {
    homeCard
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 93%;
  max-width: 383px;
  margin: 0 auto;
}
</style>
