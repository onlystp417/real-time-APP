<template>
  <div class="rollcall">
    <component @changeComponent="$_nextPage" @setTimer="$_setTimer" :is="componentId"></component>
  </div>
</template>

<script>
import rollcallHome from "@/components/rollcall/rollcallHome.vue";
import rollcallEnroll from "@/components/rollcall/rollcallEnroll.vue";
import rollcallOntime from "@/components/rollcall/rollcallOntime.vue";
import rollcallRecord from "@/components/rollcall/rollcallRecord.vue";
import mixin from "@/mixins/mixin";

export default {
  mixins: [mixin],
  data: function() {
    return {
      componentId: "rollcallHome"
    };
  },
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
