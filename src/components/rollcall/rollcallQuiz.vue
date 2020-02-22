<template>
  <div class="rollcall">
    <deepSubMenu :isActive="true">
      <template v-slot:first>點名</template>
      <template v-slot:second>問答</template>
    </deepSubMenu>
    <section class="rollcall-container">
      <!-- <rollcallHome></rollcallHome> -->
      <!-- <rollcallEnroll></rollcallEnroll> -->
      <!-- <rollcallOntime></rollcallOntime> -->
      <!-- <rollcallRecord></rollcallRecord> -->
    </section>
    <deepMainMenu></deepMainMenu>
  </div>
</template>

<script>
import deepMainMenu from "@/components/deepMainMenu.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";
import rollcallHome from "@/views/rollcall/rollcallHome.vue";
import rollcallEnroll from "@/views/rollcall/rollcallEnroll.vue";
import rollcallOntime from "@/views/rollcall/rollcallOntime.vue";
import rollcallRecord from "@/views/rollcall/rollcallRecord.vue";
export default {
  components: {
    deepMainMenu,
    deepSubMenu,
    rollcallHome,
    rollcallEnroll,
    rollcallOntime,
    rollcallRecord
  }
};
</script>

<style lang="scss" scoped>
.rollcall {
  padding-top: 39px;
  margin: 0 auto;
  width: 92%;
  max-width: 400px;
  &-container {
    padding-top: 15px;
  }
}
</style>