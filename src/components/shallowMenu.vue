<template>
  <nav class="shallow-menu">
    <a class="rollcall rollcall-current" href>
      <h2>點名</h2>
    </a>
    <a class="quiz" href>
      <h2>問答</h2>
    </a>
    <a class="grade" href>
      <h2>成績</h2>
    </a>
    <a class="course" href>
      <h2>課程資訊</h2>
    </a>
    <a class="private" href>
      <h2>私訊老師</h2>
    </a>
    <a class="public" href>
      <h2>公開討論</h2>
    </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shallow-menu {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  background: #fff;
  padding: 5px 0;
  border-top: 1px solid #b7b7b7;
  font-size: 0;
  a {
    display: inline-block;
    width: 16.6666667%;
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
  .rollcall {
    background: url(../assets/images/rollcall.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/rollcall-active.png) top center/53px
        no-repeat;
    }
  }
  .quiz {
    background: url(../assets/images/rollcall.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/rollcall-active.png) top center/53px
        no-repeat;
    }
  }
  .grade {
    background: url(../assets/images/info.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/info-active.png) top center/53px
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
  .private {
    background: url(../assets/images/message.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/message-active.png) top center/53px
        no-repeat;
    }
  }
  .public {
    background: url(../assets/images/message.png) top center/53px no-repeat;
    &:active {
      background: url(../assets/images/message-active.png) top center/53px
        no-repeat;
    }
  }
  .rollcall-current {
    background: url(../assets/images/rollcall-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .quiz-current {
    background: url(../assets/images/info-active.png) top center/53px no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .grade-current {
    background: url(../assets/images/info-active.png) top center/53px no-repeat;
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
  .private-current {
    background: url(../assets/images/info-active.png) top center/53px no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .public-current {
    background: url(../assets/images/message-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
}
</style>