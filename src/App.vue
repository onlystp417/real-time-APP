<template>
  <div id="app">
    <bar></bar>
    <!-- <missionHome></missionHome> -->
    <router-view></router-view>
    <div id="fake-router">
      <router-link to="/home">home</router-link>|
      <router-link to="/missionHome">m-home</router-link>|
      <router-link to="/missionInstruction-one">m-i-one</router-link>|
      <router-link to="/missionInstruction-two">m-i-two</router-link>|
      <router-link to="/missionInstruction-three">m-i-three</router-link>|
      <router-link to="/missionInstruction-four">m-i-four</router-link>|
      <router-link to="/missionLevel">m-level</router-link>|
      <router-link to="/missionStart">m-start</router-link>|
      <router-link to="/rolcall">rolcall</router-link>|
      <router-link to="/course">course</router-link>|
      <router-link to="/quiz">quiz</router-link>|
      <router-link to="/privateMessage">private-m</router-link>|
      <router-link to="/publicMessage">public-m</router-link>|
    </div>
  </div>
</template>

<script>
import bar from "@/components/bar.vue";
// import missionHome from "@/views/missionHome.vue";

export default {
  data: function() {
    return {};
  },
  components: {
    bar
    // missionHome
  }
};
</script>

<style lang="scss">
#app {
  padding-top: 80px;
}
</style>
