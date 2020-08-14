<template>
  <div id="app">
    <h1>Routing Example</h1>
    <p>
      <router-link to="/">main</router-link>
      <router-link to="/about">about</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
</style>

