<template>
  <div>
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
  display: flex;
  width: 100%;
  overflow-x: hidden;
}
section.grade {
  flex: 0 0 100%;
  transition: all 0.3s;
  &.change {
    transform: translateX(-100vw);
  }
}
section.course {
  flex: 0 0 100%;
  transition: all 0.3s;
  &.change {
    transform: translateX(-100vw);
  }
}
</style>