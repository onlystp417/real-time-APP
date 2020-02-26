<template>
  <nav class="main-menu">
    <a
      @click.prevent="$router.push({name: 'rollcall'}).catch(err => {})"
      class="rollcall"
      href
      :class="{current: $route.name === 'rollcall'}"
    >
      <h2>點名</h2>
    </a>
    <a
      @click.prevent="$router.push({name: 'quiz'}).catch(err => {})"
      class="quiz"
      href
      :class="{current: $route.name === 'quiz'}"
    >
      <h2>問答</h2>
    </a>
    <a
      @click.prevent="$router.push({name: 'grade'}).catch(err => {})"
      class="grade"
      href
      :class="{current: $route.name === 'grade'}"
    >
      <h2>成績</h2>
    </a>
    <a
      @click.prevent="$router.push({name: 'course'}).catch(err => {})"
      class="course"
      href
      :class="{current: $route.name === 'course'}"
    >
      <h2>課程資訊</h2>
    </a>
    <a
      @click.prevent="$router.push({name: 'privateMessage'}).catch(err => {})"
      class="privateMessage"
      href
      :class="{current: $route.name === 'privateMessage'}"
    >
      <h2>私訊老師</h2>
    </a>
    <a
      @click.prevent="$router.push({name: 'publicMessage'}).catch(err => {})"
      class="publicMessage"
      href
      :class="{current: $route.name === 'publicMessage'}"
    >
      <h2>公開討論</h2>
    </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #fff;
  border-top: 1px solid #b7b7b7;
  font-size: 0;
  h2 {
    @include fontstyle(400, 12px, 1, $font, #b7b7b7);
  }
  a {
    display: inline-block;
    padding: 37px 0px 5px 0px;
    text-align: center;
    width: 16.66667%;
  }
  .rollcall {
    background: url(../assets/images/s-rollcall.png) top center/53px no-repeat;
    &.current {
      background: url(../assets/images/s-rollcall-active.png) top center/53px
        no-repeat;
      color: $light-blue;
      h2 {
        color: $light-blue;
      }
    }
  }
  .quiz {
    background: url(../assets/images/s-quiz.png) top center/53px no-repeat;
    &.current {
      background: url(../assets/images/s-quiz-active.png) top center/53px
        no-repeat;
      color: $light-blue;
      h2 {
        color: $light-blue;
      }
    }
  }
  .grade {
    background: url(../assets/images/s-grade.png) top center/53px no-repeat;
    &.current {
      background: url(../assets/images/s-grade-active.png) top center/53px
        no-repeat;
      color: $light-blue;
      h2 {
        color: $light-blue;
      }
    }
  }
  .course {
    background: url(../assets/images/s-course.png) top center/53px no-repeat;
    &.current {
      background: url(../assets/images/s-course-active.png) top center/53px
        no-repeat;
      color: $light-blue;
      h2 {
        color: $light-blue;
      }
    }
  }
  .privateMessage {
    background: url(../assets/images/s-private.png) top center/53px no-repeat;
    &.current {
      background: url(../assets/images/s-private-active.png) center 7px/32px
        no-repeat;
      color: $light-blue;
      h2 {
        color: $light-blue;
      }
    }
  }
  .publicMessage {
    background: url(../assets/images/message.png) top center/53px no-repeat;
    &.current {
      background: url(../assets/images/message-active.png) top center/53px
        no-repeat;
      color: $light-blue;
      h2 {
        color: $light-blue;
      }
    }
  }
}
</style>