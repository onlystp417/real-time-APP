<template>
  <div class="deep-sub-menu-wrapper">
    <nav class="deep-sub-menu">
      <a class="current" href>
        <span>點名</span>
      </a>
      <a href>
        <span>問答</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.deep-sub-menu-wrapper {
  display: relative;
  padding-top: 39px;
}

.deep-sub-menu {
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  background: $white;
  a {
    display: inline-block;
    width: 50%;
    text-align: center;
  }
  span {
    display: inline-block;
    height: 39px;
    box-sizing: border-box;
    padding: 0 5px;
    @include fontstyle(400, 20px, 37px, $font, #b7b7b7);
  }
  .current {
    span {
      color: $light-blue;
      border-bottom: 2px solid $light-blue;
    }
  }
}
</style>