<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <navigation />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    navigation,
  },
};
</script>

<style>
</style>
