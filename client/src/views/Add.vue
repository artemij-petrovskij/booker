<template>
  <div class="add">
    <h1>Добавить на полку</h1>
    <el-form
      :model="controls"
      :rules="rules"
      ref="controls"
      label-width="100px"
      label-position="left "
    >
      <el-form-item label="Название" prop="title">
        <el-input v-model="controls.title"></el-input>
      </el-form-item>
      <el-form-item label="Автор" prop="author">
        <el-input v-model="controls.author"></el-input>
      </el-form-item>
      <el-form-item label="Жанр" prop="genre">
        <el-select v-model="controls.genre" placeholder="Жанр">
          <el-option
            v-for="item in controls.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Обложка(url)" prop="img">
        <el-input v-model.trim="controls.img"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('controls')">Добавить</el-button>
      </el-form-item>
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
        genre: "",
        img: "",
        options: [
          {
            value: "Фантастика",
            label: "Фантастика",
          },
          {
            value: "Научная литература",
            label: "Научная литература",
          },
          {
            value: "Художественная литература",
            label: "Художественная литература",
          },
        ],
      },
      rules: {
        title: [
          {
            min: 1,
            max: 40,
            required: true,
            message: "Пожалуйста введите название",
            trigger: "change",
          },
          {
            min: 1,
            max: 40,
            message: "Длинна не должна превышать 40 символов",
            trigger: "change",
          },
        ],
        author: [
          {
            min: 1,
            max: 40,
            required: true,
            message: "Пожалуйста введите автора",
            trigger: "change",
          },
        ],
        img: [{ required: true, message: "Введите URL", trigger: "change" }],
        genre: [
          { required: true, message: "Выберите жанр", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addBook();
        } else {
          return false;
        }
      });
    },
    async addBook() {
      let data = {
        title: this.controls.title,
        author: this.controls.author,
        genre: this.controls.genre,
        img: this.controls.img,
      };
      await Book.addNewBook(data);

      this.$message({
        message: "Поздравляю, книга добавлена на полку!",
        type: "success",
      });
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
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.el-button,
.el-select {
  width: 100%;
}
.el-form-item {
  padding: 10px;
}
</style>
