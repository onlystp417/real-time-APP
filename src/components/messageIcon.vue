<template>
  <div class="message-icon-wrapper">
    <filterPopover @click="$emit('setMessageIconActive')"></filterPopover>
    <section class="message-icon">
      <h4>與老師互動</h4>
      <p>你可以透過文字或貼圖與老師進行互動</p>
      <div class="message-item">
        <button @click="$emit('setTimer', {componentId: null, missionTimeData:{level:3,section:1, nextLevel:3,nextSection: 2}, type: 'understand'})">
          <img src="../assets/images/understand.png"
               alt="smiling face" />
          <span>我懂了</span>
        </button>
        <button @click.prevent="$emit('addMessage', 'confuse')">
          <img src="../assets/images/confuse.png"
               alt="frustrated face" />
          <span>聽不懂</span>
        </button>
        <button @click.prevent="$emit('addMessage', 'frustrat')">
          <img src="../assets/images/frustrat.png"
               alt="confused face" />
          <span>太快了</span>
        </button>
        <button>
          <img src="../assets/images/typing.png"
               alt="message" />
          <span>傳訊息</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
  import filterPopover from '@/components/filterPopover.vue';
  export default {
    components: {
      filterPopover
    }
  };
</script>

<style lang="scss" scoped>
  .message-icon {
    position: fixed;
    bottom: 11vh;
    right: 2.8vh;
    left: 2.8vh;
    background: $white;
    padding: 16px 23px 15px 23px;
    border-radius: 5px;
    z-index: 999;
    h4 {
      margin-bottom: 13px;
      @include fontstyle(500, 22px, 1.2, $font, #474747);
    }
    p {
      margin-bottom: 19px;
      @include fontstyle(500, 18px, 1.2, $font, #474747);
    }
  }

  .message-item {
    display: flex;
    flex-wrap: wrap;
    button {
      flex: 0 0 50%;
      background: $white;
      padding: 10px 0;
      margin-bottom: 5px;
      text-align: left;
      img {
        width: 29px;
        height: 29px;
        margin-right: 12px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        @include fontstyle(500, 18px, 1.2, $font, #474747);
      }
    }
  }
</style>