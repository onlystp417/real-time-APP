<template>
  <div class="course">
    <shallowMenu></shallowMenu>
    <!-- <courseHome></courseHome> -->
    <!-- <courseSuspension></courseSuspension> -->
    <courseHomework></courseHomework>
  </div>
</template>

<script>
import shallowMenu from "@/components/shallowMenu.vue";
import courseHome from "@/views/course/courseHome.vue";
import courseSuspension from "@/views/course/courseSuspension.vue";
import courseHomework from "@/views/course/courseHomework.vue";

export default {
  components: {
    shallowMenu,
    courseHome,
    courseSuspension,
    courseHomework
  }
};
</script>

<style lang="scss" scoped>
.course{
  width: 92%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 15px;
}
</style>