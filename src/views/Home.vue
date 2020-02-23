<template>
  <section class="home">
    <!-- emit  傳出的參數轉型別在哪裡轉比較明示 -->
    <homeCard
      @click="signIn({index: parseInt($event), level: 'shallow'})"
      :userCompleteDepth="$store.getters.usersCompleteShallow"
    >
      <template v-slot:title>資訊架構-淺</template>
    </homeCard>
    <homeCard
      @click="signIn({index: parseInt($event), level: 'deep'})"
      :userCompleteDepth="$store.getters.usersCompleteDeep"
    >
      <template v-slot:title>資訊架構-深</template>
    </homeCard>
  </section>
</template>

<script>
import homeCard from "@/components/homeCard";
export default {
  computed: {
    // 這邊的資料到底要放在子元件看得出來，還是放父元件
    // 還在疑惑從遠端來的資料格式是否需要開頭命名區別，這邊是打印出遠端資料並且分成畫面視覺格式
    // usersCompleteShallow() {
    //   return this.;
    // },
    // usersCompleteDeep() {
    //   return this.;
    // }
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