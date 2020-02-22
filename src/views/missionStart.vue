<template>
  <div class="missionStart">
    <a @click.prevent="nextPage()">
      <div>即時反饋系統APP · 現在</div>
      <div>輕觸即可開啓課程</div>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage(){
      if(this.$store.getters.missionDepth === 'deep') this.$router.push({name: 'rollcallAndQuiz'})
      if(this.$store.getters.missionDepth === 'shallow') this.$router.push({name: 'rollcall'})
    }
  }
};
</script>

<style lang="scss" scoped>
.missionStart {
  height: 100vh;
  background-color: #1b4084;
  background: url(../assets/images/desktop.png) top left/cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  a {
    display: block;
    margin: 47vh auto 0px auto;
    width: 97%;
    max-width: 510px;
    div {
      padding-left: 17px;
    }
    div:first-child {
      background: $light-blue;
      @include fontstyle(300, 12px, 2.5, $font, $white);
      border-radius: 8px 8px 0px 0px;
    }
    div:last-child {
      background: #fff;
      border-radius: 0px 0px 8px 8px;
      @include fontstyle(500, 16px, 3, $font, #474747);
    }
  }
}
</style>