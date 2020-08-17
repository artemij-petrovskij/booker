<template>
  <div class="books">
    <el-card v-for="book in books" :key="book._id">
      <el-image style="width: 180px; height: 300px;" :src="book.img" fit="cover"></el-image>
      <div style="padding: 14px;">
        <span>{{book.title}}</span>
        <div class="bottom clearfix">
          <div class="author">{{book.author}}</div>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
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
    this.books = await Book.get();

  },
};
</script>
<style>

.books {

  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  flex-wrap: wrap;
}
.el-card{
  margin:15px;
}
</style>