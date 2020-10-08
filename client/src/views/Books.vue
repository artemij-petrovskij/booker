<template>
  <div class="books">
    <h1>Все книги</h1>
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

          <router-link router :to="{ name: 'Edit', params: { id: book._id } }">
            <el-button
              type="info"
              icon="el-icon-edit"
              round
              size="mini"
            ></el-button>
          </router-link>
        </div>
      </el-card>
    </div>
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
};
</script>
<style>
.books {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.el-card,
h1 {
  width: 240px;
  margin: 10px;
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
</style>



