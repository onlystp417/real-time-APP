<template>
  <div class="scroll-container">
    <slot name="subNav"></slot>
    <div class="scroll">
      <section class="left"
               :class="{ change: page.currentPage === 'right' }">
        <slot name="left"></slot>
      </section>
      <section class="right"
               :class="{ change: page.currentPage === 'right' }">
        <slot name="right"></slot>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        page: {
          pages: ['left', 'right'],
          currentPage: 'left'
        }
      };
    },
    methods: {
      setCurrentPage(emitCurrentaPage) {
        this.page.currentPage = emitCurrentaPage;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .scroll {
    &-container {
      padding-top: 39px;
    }
  }
  section.left {
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
  section.right {
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
