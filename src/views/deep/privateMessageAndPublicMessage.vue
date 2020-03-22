<template>
  <div class="container">
    <deepSubMenu @subMenuClick="setCurrentPage"
                 :page="page">
      <template v-slot:first>私訊老師</template>
      <template v-slot:second>公開討論</template>
    </deepSubMenu>
    <div class="privateMessageAndpublicMessage">
      <component :is="page.currentPage"></component>
    </div>
  </div>
</template>

<script>
  import privateMessage from '@/views/shallow/privateMessage.vue';
  import publicMessage from '@/views/shallow/publicMessage.vue';
  import deepSubMenu from '@/components/deepSubMenu.vue';
  import buttonQuaternary from '@/components/buttonQuaternary.vue';
  export default {
    data: function() {
      return {
        page: {
          pages: ['privateMessage', 'publicMessage'],
          currentPage: 'privateMessage'
        }
      };
    },
    methods: {
      setCurrentPage(emitCurrentaPage) {
        this.page.currentPage = emitCurrentaPage;
      }
    },
    components: {
      privateMessage,
      publicMessage,
      deepSubMenu,
      buttonQuaternary
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 39px;
    margin-bottom: 75px;
  }
</style>