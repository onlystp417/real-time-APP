<template>
  <nav class="main-menu">
    <a class="rollcall rollcall-current" href>
      <h2>點名</h2>
    </a>
    <a class="quiz" href>
      <h2>問答</h2>
    </a>
    <a class="grade" href>
      <h2>成績</h2>
    </a>
    <a class="course-info" href>
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
.main-menu {
  a {
    width: 16.66667%;
  }
  .rollcall {
    background: url(../assets/images/s-rollcall.png) top center/53px no-repeat;
  }
  .quiz {
    background: url(../assets/images/s-quiz.png) top center/53px no-repeat;
  }
  .grade {
    background: url(../assets/images/s-grade.png) top center/53px no-repeat;
  }
  .course-info {
    background: url(../assets/images/s-course.png) top center/53px no-repeat;
  }
  .private {
    background: url(../assets/images/s-private.png) top center/53px no-repeat;
  }
  .public {
    background: url(../assets/images/message.png) top center/53px no-repeat;
  }

  .rollcall-current {
    background: url(../assets/images/s-rollcall-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .quiz-current {
    background: url(../assets/images/s-quiz-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .grade-current {
    background: url(../assets/images/s-grade-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .course-info-current {
    background: url(../assets/images/s-course-active.png) top center/53px
      no-repeat;
    color: $light-blue;
    h2 {
      color: $light-blue;
    }
  }
  .private-current {
    background: url(../assets/images/s-private-active.png) center 7px/32px
      no-repeat;
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