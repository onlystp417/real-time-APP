<template>
  <div class="rollcall">
    <rollcallHome></rollcallHome>
    <!-- <rollcallEnroll></rollcallEnroll> -->
    <!-- <rollcallOntime></rollcallOntime> -->
    <!-- <rollcallRecord></rollcallRecord> -->
  </div>
</template>

<script>
import rollcallHome from "@/views/rollcall/rollcallHome.vue";
import rollcallEnroll from "@/views/rollcall/rollcallEnroll.vue";
import rollcallOntime from "@/views/rollcall/rollcallOntime.vue";
import rollcallRecord from "@/views/rollcall/rollcallRecord.vue";
export default {
  components: {
    rollcallHome,
    rollcallEnroll,
    rollcallOntime,
    rollcallRecord
  }
};
</script>

<style lang="scss" scoped>
.rollcall {
  padding-top: 15px;
  margin: 0 auto;
  width: 92%;
  max-width: 500px;
}
</style>