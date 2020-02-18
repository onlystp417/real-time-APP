<template>
  <button class="plus-button" @click.prevent="$emit('click')">
    <img src="../assets/images/plus.png" alt="plus message" />
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.plus-button {
  position: fixed;
  right: 30px;
  bottom: 85px;
  display: block;
  width: 65px;
  height: 65px;
  background: $light-blue;
  border-radius: 999px;
  box-shadow: 0px 3px 6px #00000029;
  img {
    vertical-align: middle;
  }
}
</style>