<template>
  <div id="app" class="invisual-app">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <p>
            Logo <sup>here...</sup>
          </p>
        </div>
        <div class="containers-base">
          <template v-for="(item, index) in parentContainers">
            <div class="containers-base--item" :key="`item--${index}`">
              <PopupBaseDetail :items="item" @triggerPopup="triggerPopup" />
            </div>
          </template>
        </div>
      </div>
    </div>
    <PopupDetail v-model="uiShowPopup" :content="selectedLink" />

    <div class="container">
      <ListPosts @clickPost="triggerPopup" />
    </div>
  </div>
</template>

<script>
import PopupBaseDetail from "./components/PopupBaseDetail";
import PopupDetail from "./components/PopupDetail";
import ListPosts from "./components/ListPosts";
import { typesDialog } from "./configs/mock";
let {
  login,
  signup,
  forgotPassword,
} = typesDialog;

export default {
  name: "App",
  components: {
    PopupBaseDetail,
    PopupDetail,
    ListPosts,
  },
  data() {
    return {
      uiShowPopup: false,
      selectedLink: {},
    };
  },
  computed: {
    parentContainers() {
      return {
        containerOne: [login, signup, forgotPassword],
      };
    },
  },
  methods: {
    triggerPopup(data = {}) {
      // set data for content popup
      let { link } = data;
      this.setContentReceive(link);
      // open popup
      this.openPopup();
    },
    setContentReceive(link) {
      this.selectedLink = link;
    },
    openPopup() {
      this.uiShowPopup = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.container {
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
}
.header-content {
  /* border: solid 1px red; */
  display: flex;
  justify-content: space-between;
}
.containers-base {
  border: solid 1px transparent;
  display: flex;
}
.containers-base .containers-base--item {
  /* width: 50%; */
}
.popup-base {
}
.logo {
  display: flex;
  align-items: center;
  
}
.logo p {
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
}
.logo p sup {
  color: orange;
}
</style>
