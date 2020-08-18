<template>
  <div class="add">
    <h1>Добавить на полку</h1>
    <el-form label-width="90px">
      <el-form-item label="Название">
        <el-input v-model="controls.title"></el-input>
      </el-form-item>
      <el-form-item label="Автор">
        <el-input v-model="controls.author"></el-input>
      </el-form-item>
      <el-form-item label="Обложка(url)">
        <el-input v-model.trim="controls.img"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm()">Добавить</el-button>
    </el-form>
  </div>
</template>

<script>
import { Book } from "@/BookService.js";
export default {
  data() {
    return {
      controls: {
        title: "",
        author: "",
        img: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("ok");
      this.addNewBook()
    },
    async addNewBook() {
      let data = {
        label: this.controls.label,
        text: this.controls.text,
        img: this.controls.img
      };
      await Book.insertTask(data);
      const response = await Book.getTasks();
      this.tasks = response.reverse();
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  padding-bottom: 10px;
}
form.el-form {
  max-width: 600px !important;
}
.el-button {
  width: 100%;
}
</style>
