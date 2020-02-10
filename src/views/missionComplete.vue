<template>
  <div>{{ count }}</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.missionCompeleted {
  border-radius: 13px;
  width: 360px;
  margin: 0 auto;
  padding-top: 111px;
  text-align: center;
  .card {
    background-color: #fff;
    padding: 26px 37px 34px 37px;
  }
  h3 {
    @include fontstyle(bold, 20px, 1.5, $font, #757575);
    span {
      padding-left: 12px;
    }
  }
  p {
    @include fontstyle(bold, 16px, 2, $font, #757575);
    margin: 0;
  }
  h2 {
    @include fontstyle(regular, 26px, 1.5, $font, #757575);
    margin-bottom: 18px;
  }
}
</style>

<script>
export default {
  computed: {
    count() {
      return this.$store.state;
    }
  }
};
</script>
