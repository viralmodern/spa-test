<template>
  <div class="popup-base">
    <template v-for="link in items">
      <button :key="link.type" class="link-trigger" @click="onClickLink($event,link)">
        {{link.linkTitle}}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "PopupBaseDetail",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClickLink(e, link) {
      this.$emit('triggerPopup', {e, link})
    }
  },
};
</script>

<style>
.link-trigger {
  display: inline-block;
  border: none;
  padding: 5px;
  outline: none;
  cursor: pointer;
  font-size: 75%;
  background: rgb(4, 91, 131);
  color: #fff;
  border-radius: 3px;
}
.link-trigger:hover {
  background: purple;
  color: #fff;
}
.popup-base .link-trigger{
  margin: 5px;
}
</style>
