<template>
  <el-menu
    router
    class="el-menu-vertical-demo"
    :style="{ height: '100%' }"
    :collapse="isCollapse"
    :default-active="$route.path"
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span class="home">Booker</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-reading"></i>
        <span>Книги</span>
      </template>

      <el-menu-item index="/books">
        <i class="el-icon-notebook-2"></i>
        <span>Все книги</span>
      </el-menu-item>
      <el-menu-item index="/add">
        <i class="el-icon-circle-plus-outline"></i>
        <span>Добавить книги</span>
      </el-menu-item>
    </el-submenu>


  </el-menu>
</template>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
}
.home{
  font-size: 18px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      width: null,
    };
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      if (this.width <= 900) {
        this.isCollapse = true;
      }
      if (this.width >= 900) {
        this.isCollapse = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
