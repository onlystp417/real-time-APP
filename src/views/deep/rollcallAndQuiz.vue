<template>
  <div>
    <!-- 深路由目前都沒有資料，因為他們只是作為左右切換的頁面。 -->
    <!-- 在深路由之中，其中包含的高度需要變動，所以需要變動。 -->
    <deepSubMenu @subMenuClick="setCurrentPage" :page="page">
      <template v-slot:first>點名</template>
      <template v-slot:second>問答</template>
    </deepSubMenu>
    <div class="rollcallAndQuiz">
      <section
        class="rollcall"
        :class="{ change: page.currentPage === 'quiz' }"
      >
        <rollcall></rollcall>
      </section>
      <section class="quiz" :class="{ change: page.currentPage === 'quiz' }">
        <quiz></quiz>
      </section>
    </div>
  </div>
</template>

<script>
import rollcall from "@/views/shallow/rollcall.vue";
import quiz from "@/views/shallow/quiz.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";

export default {
  data: function() {
    return {
      page: {
        pages: ["rollcall", "quiz"],
        currentPage: "rollcall"
      }
    };
  },
  methods: {
    setCurrentPage(emitCurrentaPage) {
      this.page.currentPage = emitCurrentaPage;
    }
  },
  components: {
    rollcall,
    quiz,
    deepSubMenu
  }
};
</script>

<style lang="scss" scoped>
.rollcallAndQuiz {
  // 要調整
  overflow: hidden;
  white-space: nowrap;
}
section.rollcall {
  display: inline-block;
  white-space: normal;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  vertical-align: top;
  left: 0px;
  z-index: 99;
  &.change {
    left: -100vw;
  }
}
section.quiz {
  display: inline-block;
  white-space: normal;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  vertical-align: top;
  left: 0px;
  z-index: 99;
  &.change {
    left: -100vw;
  }
}
</style>
