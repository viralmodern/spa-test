<template>
  <div>
    <h3>Todo List</h3>
    <template v-for="post in posts">
      <PostThumbnail
        :key="post.id"
        :post="post"
        @deletePost="deletePost"
        @updatePost="updatePost"
        @clickPost="($$data) => $emit('clickPost', $$data)"
      />
    </template>
   
  </div>
</template>

<script>
import PostThumbnail from "./PostThumbnail";
export default {
  name: "ListPosts",
  components: {
    PostThumbnail,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        let res = await fetch(
          "https://jsonplaceholder.typicode.com/users/1/todos"
        );
        let posts = await res.json();
        this.posts = [...posts];
      } catch (e) {
      } finally {
      }
    },
    deletePost(postId) {
      this.posts = [...this.posts].filter(post => post.id !== postId)
    },
    updatePost(post) {
      let posts = [...this.posts]
      let currPostIndex = posts.findIndex(p => p.id === post.id)
      if(currPostIndex >= 0) {
        posts[currPostIndex] = {...post}
        this.posts = [...posts]
      }
    }
  },
};
</script>

<style scope>
h3 {
  text-align: left;
  border-bottom: solid 1px rgb(12, 132, 136);
  padding-bottom: 5px;
  font-size: 16px;
}
</style>
