<template>
  <div>
    <!-- 深路由目前都沒有資料，因為他們只是作為左右切換的頁面。 -->
    <deepSubMenu @subMenuClick="setCurrentPage" :page="page">
      <template v-slot:first>成績</template>
      <template v-slot:second>課程資訊</template>
    </deepSubMenu>
    <div class="gradeAndcourse">
      <section class="grade" :class="{change: page.currentPage === 'course'}">
        <grade></grade>
      </section>
      <section class="course" :class="{change: page.currentPage === 'course'}">
        <course></course>
      </section>
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
.gradeAndcourse {
  overflow: hidden;
  white-space: nowrap;
}
section.grade {
  display: inline-block;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  vertical-align: top;
  white-space: normal;
  left: 0px;
  z-index: 99;
  &.change {
    left: -100vw;
  }
}
section.course {
  display: inline-block;
  width: 100%;
  transition: all 0.3s;
  white-space: normal;
  position: relative;
  vertical-align: top;
  left: 0px;
  z-index: 99;
  &.change {
    left: -100vw;
  }
}
</style>