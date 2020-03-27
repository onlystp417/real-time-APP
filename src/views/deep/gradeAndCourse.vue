<template>
  <div class="container">
    <deepSubMenu @subMenuClick="setCurrentPage" :page="page">
      <template v-slot:first>成績</template>
      <template v-slot:second>課程資訊</template>
    </deepSubMenu>
    <div class="gradeAndcourse">
      <component :is="page.currentPage"></component>
    </div>
  </div>
</template>

<script>
import grade from "@/views/shallow/grade.vue";
import course from "@/views/shallow/course.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";
export default {
  data: function() {
    return {
      page: {
        pages: ["grade", "course"],
        currentPage: "grade"
      }
    };
  },
  methods: {
    setCurrentPage(emitCurrentaPage) {
      this.page.currentPage = emitCurrentaPage;
    }
  },
  components: {
    grade,
    course,
    deepSubMenu
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 39px;
  margin-bottom: 75px;
}
</style>