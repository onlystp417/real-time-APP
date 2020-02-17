<template>
  <div>
    <deepSubMenu @subMenuClick="setCurrentPage" :page="page">
      <template v-slot:first>點名</template>
      <template v-slot:second>問答</template>
    </deepSubMenu>
    <div class="rollcallAndQuiz">
      <section class="rollcall" :class="{change: page.currentPage === 'quiz'}">
        <rollcall></rollcall>
      </section>
      <section class="quiz" :class="{change: page.currentPage === 'quiz'}">
        <quiz></quiz>
      </section>
    </div>
  </div>
</template>

<script>
import rollcall from "@/views/rollcall/rollcall.vue";
import quiz from "@/views/quiz/quiz.vue";
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
  display: flex;
  width: 100%;
  overflow-x: hidden;
}
section.rollcall {
  flex: 0 0 100%;
  transition: all 0.3s;
  &.change {
    transform: translateX(-100vw);
  }
}
section.quiz {
  flex: 0 0 100%;
  transition: all 0.3s;
  &.change {
    transform: translateX(-100vw);
  }
}
</style>