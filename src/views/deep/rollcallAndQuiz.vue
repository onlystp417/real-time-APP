<template>
  <div class="container">
    <deepSubMenu @subMenuClick="setCurrentPage"
                 :page="page">
      <template v-slot:first>點名</template>
      <template v-slot:second>問答</template>
    </deepSubMenu>
    <div class="rollcallAndQuiz">
      <component :is="page.currentPage"></component>
    </div>
  </div>
</template>

<script>
  import rollcall from '@/views/shallow/rollcall.vue';
  import quiz from '@/views/shallow/quiz.vue';
  import deepSubMenu from '@/components/deepSubMenu.vue';

  export default {
    data: function() {
      return {
        page: {
          pages: ['rollcall', 'quiz'],
          currentPage: 'rollcall'
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
  .container {
    padding-top: 39px;
    margin-bottom: 75px;
  }
</style>
