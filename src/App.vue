<template>
  <div id="app">
    <bar></bar>
    <router-view></router-view>
    <div id="fake-router">
      <router-link to="/">home</router-link>|
      <router-link to="/missionHome">m-home</router-link>|
      <router-link to="/missionInstruction">m-i</router-link>|
      <router-link to="/missionLevel">m-level</router-link>|
      <router-link to="/missionStart">m-start</router-link>|
      <router-link to="/missionComplete">m-complete</router-link>|
      <router-link to="/rollcall">rollcall</router-link>|
      <router-link to="/course">course</router-link>|
      <router-link to="/quiz">quiz</router-link>|
      <router-link to="/grade">grade</router-link>|
      <router-link to="/privateMessage">private-m</router-link>|
      <router-link to="/publicMessage">public-m</router-link>|
    </div>
  </div>
</template>

<script>
import bar from "@/components/bar.vue";

export default {
  data: function() {
    return {};
  },
  components: {
    bar
  }
};
</script>

<style lang="scss">
#app {
  padding-top: 80px;
}
</style>
