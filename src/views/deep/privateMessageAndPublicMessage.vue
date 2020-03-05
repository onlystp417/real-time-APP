<template>
  <div>
    <!-- 深路由目前都沒有資料，因為他們只是作為左右切換的頁面。 -->
    <!-- 修改層次問題，因為 z-index 修改兩個按鈕，但是會造成問題。 -->
    <deepSubMenu @subMenuClick="setCurrentPage" :page="page">
      <template v-slot:first>私訊老師</template>
      <template v-slot:second>公開討論</template>
    </deepSubMenu>
    <div class="privateMessageAndpublicMessage">
      <section class="privateMessage" :class="{change: page.currentPage === 'publicMessage'}">
        <privateMessage>
        </privateMessage>
      </section>
      <section class="publicMessage" :class="{change: page.currentPage === 'publicMessage'}">
        <publicMessage>
        </publicMessage>
      </section>
    </div>
  </div>
</template>

<script>
import privateMessage from "@/views/shallow/privateMessage.vue";
import publicMessage from "@/views/shallow/publicMessage.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";
import buttonQuaternary from "@/components/buttonQuaternary.vue";
export default {
  data: function() {
    return {
      page: {
        pages: ["privateMessage", "publicMessage"],
        currentPage: "privateMessage"
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
.privateMessageAndpublicMessage {
  overflow: hidden;
  white-space: nowrap;
}
section.privateMessage {
  display: inline-block;
  width: 100%;
  transition: all 0.3s;
  position: relative;
  vertical-align: top;
  left: 0px;
    white-space: normal;
  z-index: 99;
  &.change {
    z-index: 1;
    left: -100vw;
  }
}
section.publicMessage {
  display: inline-block;
  width: 100%;
    white-space: normal;
  transition: all 0.3s;
  position: relative;
  vertical-align: top;
  left: 0px;
  z-index: 1;
  &.change {
    left: -100vw;
    z-index: 99;
  }
}
</style>