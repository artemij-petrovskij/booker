<template>
  <div class="book">
    <h1>{{ controls.title }}</h1>
 <h4>{{controls.author}}</h4>
      
 
         <el-image
          style="width: 200px; height: 300px"
          :src="controls.img"
          fit="cover"
        ></el-image>
        

  </div>
</template>

<script>
import { Book } from "@/BookService.js";
export default {
  data() {
    return {
      controls: {
        id: "",
        title: "",
        author: "",
        genre: "",
        img: "",
      },
    };
  },
  async created() {
    const response = await Book.showSingleBook(this.$route.params);
    const { _id, title, author, genre, img } = response[0];
    this.controls.id = _id;
    this.controls.title = title;
    this.controls.author = author;
    this.controls.genre = genre;
    this.controls.img = img;
  },
};
</script>

<style lang="css" scoped>
h1 {
  padding-bottom: 10px;
}
h4{
    margin:10px;
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
