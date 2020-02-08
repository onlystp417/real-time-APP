<template>
  <div>
    <deepSubMenuGradCourse></deepSubMenuGradCourse>
    <placeHolder></placeHolder>
    <!-- <shallowMenu></shallowMenu> -->
    <deepMainMenu></deepMainMenu>
  </div>
</template>

<script>
import deepSubMenuGradCourse from "@/components/deepSubMenu_grade_course.vue";
import placeHolder from "@/components/placeHolder.vue";
import shallowMenu from "@/components/shallowMenu.vue";
import deepMainMenu from "@/components/deepMainMenu.vue";
export default {
  components: {
    deepSubMenuGradCourse,
    placeHolder,
    shallowMenu,
    deepMainMenu
  }
};
</script>

<style lang="scss" scoped>
</style>

