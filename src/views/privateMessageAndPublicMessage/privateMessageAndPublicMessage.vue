<template>
  <div>
    <deepSubMenu @subMenuClick="setCurrentPage" :page="page">
      <template v-slot:first>私訊老師</template>
      <template v-slot:second>公開討論</template>
    </deepSubMenu>
    <div class="privateMessageAndpublicMessage">
      <section class="privateMessage" :class="{change: page.currentPage === 'publicMessage'}">
        <privateMessage></privateMessage>
      </section>
      <section class="publicMessage" :class="{change: page.currentPage === 'publicMessage'}">
        <publicMessage></publicMessage>
      </section>
    </div>
  </div>
</template>

<script>
import privateMessage from "@/views/privateMessage/privateMessage.vue";
import publicMessage from "@/views/publicMessage/publicMessage.vue";
import deepSubMenu from "@/components/deepSubMenu.vue";
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
    deepSubMenu
  }
};
</script>

<style lang="scss" scoped>
.privateMessageAndpublicMessage {
  display: flex;
  width: 100%;
  height: calc(100vh - 150px);
  overflow-x: hidden;
}
section.privateMessage {
  flex: 0 0 100%;
  transition: all 0.3s;
  height: 100%;
  &.change {
    transform: translateX(-100vw);
  }
}
section.publicMessage {
  flex: 0 0 100%;
  transition: all 0.3s;
  height: 100%;
  &.change {
    transform: translateX(-100vw);
  }
}
</style>