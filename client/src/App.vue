<template>
  <div id="app">
    <el-container :style="{height:'100vh'}">
      <el-aside>
        <navigation />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import navigation from "./components/Navigation";
export default {
  name: "Home",
  components: {
    navigation,
  },
};
</script>

<style >
body {
  margin: 0px;
  padding: 0px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 200px;
}
  aside.el-aside {
    width: 220px !important;
  }

@media (max-width: 900px) {
  aside.el-aside {
    width: 100px !important;
  }
}
</style>

