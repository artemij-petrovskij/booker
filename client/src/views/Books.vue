<template>
  <div class="main">
    <h1>Все книги</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Таблица"
        ><span slot="label"> <i class="el-icon-s-grid"></i> Таблица </span>
        <div class="books">
          <el-card v-for="book in books" :key="book._id">
            <el-image
              style="width: 200px; height: 300px"
              :src="book.img"
              fit="cover"
            ></el-image>
            <div style="padding: 14px">
              <div class="bottom clearfix">
                <div class="title">{{ book.title }}</div>

                <div class="author">{{ book.author }}</div>
              </div>

              <el-button-group>
                <router-link
                  router
                  :to="{ name: 'Book', params: { id: book._id } }"
                >
                  <el-button icon="el-icon-view" size="small"></el-button>
                </router-link>
                <router-link
                  router
                  :to="{ name: 'Edit', params: { id: book._id } }"
                >
                  <el-button icon="el-icon-edit" size="small"></el-button>
                </router-link>

                <el-popconfirm
                  disabled
                  confirmButtonText="Да"
                  cancelButtonText="Нет, Спасибо"
                  title="Вы действительно хотите удалить?"
                  @onConfirm="deleteOne({ id: book._id })"
                >
                  <el-button
                    icon="el-icon-delete"
                    size="small"
                    slot="reference"
                  ></el-button>
                </el-popconfirm>
              </el-button-group>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Список">
        <span slot="label"> <i class="el-icon-s-order"></i> Список </span>
        <el-table :data="books" style="width: 100%">
          <el-table-column prop="title" label="Название"> </el-table-column>
          <el-table-column prop="author" label="Автор"> </el-table-column>
          <el-table-column prop="genre" label="Жанр"> </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { Book } from "@/BookService.js";
export default {
  data() {
    return {
      books: "",
    };
  },
  async created() {
    this.books = await Book.getAllBooks();
  },
  methods: {
    async deleteOne(item) {
      const response = await Book.deleteItem(item);
      if (!response.err) {
        this.$message({
          showClose: true,
          message: "Книга успешно удалена!",
          type: "success",
        });
        this.books = await Book.getAllBooks();
      } else {
        this.$message({
          message: response.err,
          type: "warning",
        });
      }
    },
  },
};
</script>
<style>
.books {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
h1 {
  margin: 10px;
}
.el-card {
  margin: 12px;
  width: 240px;
  height: 460px;
}

.title,
.author {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.el-button-group {
  padding-top: 20px;
}
.title {
  font-size: 17px;
}
.author {
  font-size: 15px;
  opacity: 0.7;
}
</style>



