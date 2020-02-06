<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>|
      <router-link to="/misisonHome">m-home</router-link>
      <router-link to="/missionInstruction-one">m-i-one</router-link>
      <router-link to="/missionInstruction-two">m-i-two</router-link>
      <router-link to="/missionInstruction-three">m-i-three</router-link>
      <router-link to="/missionInstruction-four">m-i-four</router-link>
      <router-link to="/missionLevel">m-level</router-link>
      <router-link to="/missionStart">m-start</router-link>
      <router-link to="/rolcall">rolcall</router-link>
      <router-link to="/course">course</router-link>
      <router-link to="/quiz">quiz</router-link>
      <router-link to="/privateMessage">private-m</router-link>
      <router-link to="/publicMessage">public-m</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
