<template>
  <nav class="deep-main-menu">
    <a class="rollcall-quiz rollcall-quiz-current" href>
      <h2>點名與問答</h2>
    </a>
    <a class="course" href>
      <h2>課程資訊</h2>
    </a>
    <a class="contact" href>
      <h2>師生交流</h2>
    </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.deep-main-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding-bottom: 5px;
  border-top: 1px solid #b7b7b7;
  font-size: 0;
  a {
    display: inline-block;
    width: 33.3333%;
    padding-top: 37px;
    text-align: center;
    img {
      width: 53px;
      vertical-align: top;
    }
    h2 {
      @include fontstyle(400, 12px, 1, $font, #b7b7b7);
    }
    &:active {
      color: $light-blue;
    }
  }
  .rollcall-quiz {
    background: url(../assets/images/rollcall.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/rollcall-active.png) top center/53px
        no-repeat;
    }
  }
  .course {
    background: url(../assets/images/info.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/info-active.png) top center/53px
        no-repeat;
    }
  }
  .contact {
    background: url(../assets/images/message.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/message-active.png) top center/53px
        no-repeat;
    }
  }
  .rollcall-quiz-current {
    background: url(../assets/images/rollcall-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }

  .course-current {
    background: url(../assets/images/info-active.png) top center/53px no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }

  .contact-current {
    background: url(../assets/images/message-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
}
</style>