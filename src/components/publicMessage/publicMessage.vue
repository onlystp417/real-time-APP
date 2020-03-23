<template>
  <div class="public-message">
    <div class="message-list">
      <section class="public-message-card" @click="$emit('changeComponent', 'publicMessageDetail')">
        <header class="message-header">
          <img src="@/assets/images/user.png"
               alt="user graphy" />
          <div>
            <h5>王小明</h5>
            <time>2019-06-11 16:00</time>
          </div>
        </header>
        <div class="message-content">
          <h5>邊緣運算</h5>
          <p>即時反饋系統</p>
        </div>
        <div class="message-response">
          <span class="num">1</span>
          <span class="unit">則回應</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import messageTyping from '@/components/messageTyping.vue';
  import buttonQuaternary from '@/components/buttonQuaternary.vue';
  import buttonQuinary from '@/components/buttonQuinary.vue';

  export default {
    components: {
      messageTyping,
      buttonQuaternary,
      buttonQuinary,
    }
  };
</script>

<style lang="scss" scoped>
  .public-message {
    margin: 0 auto;
    width: 92%;
    max-width: 500px;
    padding-top: 28px;
    height: 100%;
    position: relative;
    &-card {
      background: #fff;
      position: relative;
      padding: 9px 12px;
      min-height: 170px;
      box-shadow: 0px 3px 6px #00000029;
      &:last-child {
        margin-bottom: 36px;
      }
    }
  }
  .public-button {
    text-align: center;
    margin-top: 37px;
  }

  .message {
    &-header {
      display: block;
      margin-bottom: 10px;
      img {
        display: inline-block;
        width: 29px;
        height: 29px;
        vertical-align: top;
        margin-right: 5px;
      }
      > div {
        display: inline-block;
        width: calc(100% - 34px);
        vertical-align: top;
      }
      h5 {
        @include fontstyle(700, 16px, 1, $font, #474747);
        margin-bottom: -3px;
      }
      time {
        display: inline-block;
        @include fontstyle(400, 10px, 1, $font, #474747);
      }
    }
    &-content {
      h5 {
        margin-bottom: 3px;
        @include fontstyle(700, 14px, 1.2, $font, #474747);
      }
      p {
        display: inline-block;
        @include fontstyle(400, 10px, 1.5, $font, #474747);
      }
    }
    &-response {
      position: absolute;
      right: 16px;
      bottom: 9px;
      @include fontstyle(300px, 10px, 1, $font, #b7b7b7);
    }
    &-text {
      text-align: right;
      margin-bottom: 11px;
      margin-top: 11px;
      @include fontstyle(300px, 10px, 1, $font, #b7b7b7);
    }
  }
</style>