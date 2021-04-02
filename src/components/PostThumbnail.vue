<template>
  <div class="post-thumbnail">
    <div class="item-flex">
      <div class="left-title">
        <p class="title">
          {{ post.title }} &nbsp;
        </p>
        
        <button v-if="post.completed" class="link-trigger green">Done</button>
      </div>
      <div class="right-btns">
        <button class="link-trigger" @click="editPost">Edit</button>
        <button class="link-trigger red" @click="deletePost">Delete</button>
        <button class="link-trigger" @click="clickPost">View</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostThumbnail",
  components: {},
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    descriptionPost() {
      let { post } = this;
      let link = {
        id: post["id"],
        completed: post["completed"],
        linkTitle: post["title"],
        textContent:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis placeat delectus porro voluptas minima ullam deserunt nisi rerum, asperiores possimus ex sint aut adipisci quisquam beatae numquam fugit sequi nemo?",
      };
      return link;
    },
  },
  methods: {
    clickPost() {
      let { descriptionPost } = this;
      this.$emit("clickPost", { link: descriptionPost });
    },
    deletePost() {
      let { descriptionPost } = this;
      let link = {
        ...descriptionPost,
        linkTitle: `Do you want to delete post?`,
        textContent: descriptionPost["linkTitle"],
        actionForm: {
          type: "deleted",
          label: "Delete",
        },
        on: {
          click: () => {
            this.$emit("deletePost", descriptionPost["id"]);
          },
        },
      };
      this.$emit("clickPost", { link });
    },
    editPost() {
      let { descriptionPost, post } = this;
      let link = {
        ...descriptionPost,
        linkTitle: "Update Task",
        textContent: "",
        on: {
          click: (newPost = {}) => {
            this.$emit("updatePost", { ...post, ...newPost });
          },
        },
        fields: [
          {
            label: "Title",
            name: "title",
            model: "input",
            required: true,
            vBind: {
              class: "field-input",
              type: "text",
              value: descriptionPost["linkTitle"],
            },
          },
          {
            label: "Complete?",
            name: "completed",
            model: "input",
            vBind: {
              class: "field-input",
              type: "checkbox",
              checked: descriptionPost["completed"],
            },
          },
        ],
      };
      this.$emit("clickPost", { link });
    },
  },
};
</script>

<style scope>
.post-thumbnail {
  text-align: left;
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
}
.post-thumbnail:last-child {
  border-bottom-color: transparent;
}
.title {
  font-size: 14px;
  /* font-weight: bold; */
  margin-right: 5px;
}
.description {
  font-size: 12px;
}
.item-flex {
  display: flex;
  justify-content: space-between;
}
.right-btns {
  /* border: solid 1px red; */
  display: flex;
  align-items: center;
}
.right-btns .link-trigger {
  margin-left: 5px;
}
.link-trigger.green {
  background: green;
  cursor: default;
}
.link-trigger.red {
  background: red;
}
.left-title {
  display: flex;
  align-items: center;
}
</style>
