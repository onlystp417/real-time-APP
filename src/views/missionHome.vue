<template>
  <div class="mission-home">
    <form class="register" action>
      <div>
        <label>編號：M13</label>
        <input type="text" placeholder="姓名：王小明" />
      </div>
      <button class="cancel">取消</button>
      <button class="start" type="submit">開始</button>
    </form>
  </div>
</template>
  
<script>
export default {};
</script>

<style lang="scss" scoped>
.mission-home {
  padding: 212px 40px 0px 40px;
}
.register {
  > div {
    background: #fff;
    width: 100%;
    margin: 0px auto 26px auto;
    padding: 15px 37px 27px 34px;
    border-radius: 13px;
    box-shadow: 0px 1px 3px #00000029;
    text-align: center;
  }
  label {
    display: block;
    margin-bottom: 22px;
    @include fontstyle(regular, 26px, 1, $font, #757575);
  }
  input {
    display: block;
    background: #f1f1f1;
    border-radius: 8px;
    width: 100%;
    padding: 13px 15px;
    text-align: center;
    @include fontstyle(regular, 16px, 1, $font, #bcbcbc);
    &::placeholder {
      @include fontstyle(regular, 16px, 1, $font, #bcbcbc);
    }
  }
  button {
    width: 114px;
    padding: 10px 11px;
    border-radius: 99999px;
    box-shadow: 0px 2px 3px #00000029;
  }
  .cancel {
    background: #fff;
    margin-left: 44px;
    margin-right: 15px;
    @include fontstyle(regular, 16px, 1.5, $font, #b7b7b7);
  }
  .start {
    background: #8ec8f3;
    margin-left: 15px;
    margin-right: 29px;
    @include fontstyle(regular, 16px, 1.5, $font, #fff);
  }
}
</style>