<template>
  <div class="message-typing">
    <form action>
      <section>
        <div class="header">
          <img src="../assets/images/back-black.png" alt="preview" />
          <slot name="title"></slot>
        </div>
        <slot name="input"></slot>
      </section>
      <div class="typing-button">
        <buttonQuinary>傳送</buttonQuinary>
      </div>
    </form>
  </div>
</template>

<script>
import buttonQuinary from "@/components/buttonQuinary.vue";
export default {
  components: {
    buttonQuinary
  }
};
</script>

<style lang="scss" scoped>
.message-typing {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f0f1f3;
  z-index: 999;
  section {
    background: $white;
    padding-top: 7.2vh;
    min-height: 47vh;
    margin-bottom: 46px;
  }
  .header {
    position: relative;
    margin-bottom: 22px;
    img {
      width: 31px;
      height: 34px;
      position: absolute;
      margin-left: 18px;
    }
    p {
      text-align: center;
      @include fontstyle(500, 17px, 34px, $font, #474747);
    }
  }
  .content {
    background: $white;
    display: block;
    width: 100%;
    padding: 12px 29px 12px 29px;
    @include fontstyle(400, 16px, 1.5, $font, #474747);
    &::placeholder {
      color: #b4b4b4;
    }
  }
  .typing-button {
    text-align: center;
  }
}
</style>