<template>
<div class="admin">
  <el-container :style="{height:'100%'}">
    <el-aside >
      <app-aside/>
    </el-aside>
    <el-main>
      <nuxt />
    </el-main>
  </el-container>
  </div>
</template>

<script>
import AppAside from '@/components/Navigation'
export default {

  components: {AppAside}
}
</script>

<style >
body{
  margin:0px;
  padding:0px;
}

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }


@media (max-width: 900px) {
 aside.el-aside{
    width: 100px!important;
  }
}

</style>
