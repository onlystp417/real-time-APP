<template>
  <section class="missionHome">
    <form @submit.prevent="signIn" class="missionHome-register" method="post" action="">
      <div class="register-user">
        <h3>編號：{{ $store.getters.userSymbol }}</h3>
        <input pattern="\D{1,}" title="請輸入非數字中英文姓名，謝謝"  type="text" required placeholder="姓名：王小明" v-model="userName" />
      </div>
      <div class="register-action">
        <button class="negtive" @click.prevent="$router.push({name: 'home'})" type="button">取消</button>
        <button class="positive" type="submit">開始</button>
      </div>
    </form>
  </section>
</template>

<script>

export default {
  data: function() {
    return {
      userName: ""
    };
  },
  methods: {
    signIn() {
      this.$store.commit("setUserName", this.userName);
      this.$router.push({ name: "missionLevel" });
    }
  }
};
</script>

<style lang="scss" scoped>
.missionHome {
  padding-top: 29vh;
  width: 80.5%;
  max-width: 475px;
  margin: 0 auto;
  &-register {
    .register {
      &-user {
        background: $white;
        margin-bottom: 26px;
        padding: 15px 37px 27px 34px;
        border-radius: 13px;
        box-shadow: 0px 1px 3px #00000029;
        text-align: center;
        h3 {
          display: block;
          margin-bottom: 22px;
          @include fontstyle(500, 26px, 1.15, $font, #757575);
        }
        input {
          background: #f1f1f1;
          border-radius: 8px;
          width: 100%;
          max-width: 300px;
          padding: 13px 15px;
          text-align: center;
          @include fontstyle(400, 16px, 1, $font, #757575);
          &::placeholder {
            @include fontstyle(400, 16px, 1, $font, #bcbcbc);
          }
        }
      }
      &-action {
        margin: 0 12.6%;
        button {
          width: 44%;
          height: 44px;
          border-radius: 44px;
          box-shadow: 0px 2px 3px #00000029;
        }
        .negtive {
          background: $white;
          @include fontstyle(400, 16px, 1.5, $font, #b7b7b7);
        }
        .positive {
          background: $light-blue;
          margin-left: 12%;
          @include fontstyle(400, 16px, 1.5, $font, $white);
          &:active {
            background: $white;
            color: $light-blue;
            border: $light-blue 2px solid;
          }
        }
      }
    }
  }
}
</style>