<template>
  <div class="popup-wrapper" :class="activeNameCls">
    <div class="popup-content">
      <div class="popup-content---container">
        <div class="header-popup">
          <div class="title" v-html="textDescription.linkTitle" />
          <div class="spacer"></div>
          <button class="link-round" @click="closeModal">×</button>
        </div>
        <div class="content-popup" v-if="value">
          <div class="text-content" v-html="textDescription.textContent" />
          <template v-if="textDescription.fields">
            <div class="form-content">
              <FormModel
                :fields="textDescription.fields"
                :on="textDescription.on"
                @submitted="submitted"
              />
            </div>
          </template>
        </div>
        <div class="footer-popup" v-if="content.actionForm">
          <div>
            <div>
              <button
                class="link-trigger red"
                v-on="content.on"
                @click="closeModal"
              >
                {{ content.actionForm.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="backdrop" @click="closeModal"></div>
  </div>
</template>

<script>
import FormModel from "./FormModel";
export default {
  name: "PopupDetail",
  components: {
    FormModel,
  },
  props: {
    value: {},
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    activeNameCls() {
      let { value } = this;
      return value ? "active" : "inactive";
    },
    textDescription() {
      let { content = {} } = this;
      let linkTitle = "",
        textContent = "",
        fields = [],
        on = {};
      let temp = {
        linkTitle,
        textContent,
        content,
        fields,
        on,
      };
      temp.linkTitle = content["linkTitle"];
      temp.textContent = content["textContent"];
      temp.fields = content["fields"];
      temp.on = content["on"] || {};
      return temp;
    },
  },
  methods: {
    closeModal() {
      this.$emit("input", false);
    },
    submitted(data) {
      this.$emit("submitted", data);
      this.$emit("input", false);
    }
  },
};
</script>

<style>
.popup-wrapper.inactive .backdrop {
  opacity: 0;
  pointer-events: none;
}
.popup-wrapper.inactive .popup-content {
  transform: translateX(-50%) translateY(-150%);
  opacity: 0;
}
.popup-content {
  /* border: solid 1px red; */
  position: fixed;
  top: 0;
  left: 50%;
  width: 600px;
  transform: translateX(-50%) translateY(30px);
  /* height: 100vh; */
  z-index: 9;
  transition: all 0.25s linear;
}
.popup-content---container {
  width: 100%;
  margin: 0px auto 0px auto;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
}
.link-round {
  border: none;
  outline: none;
  width: 25px;
  height: 25px;
  display: block;
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  background: none;
}
.link-round:hover {
  background: rgba(0, 0, 0, 0.05);
}
.header-popup {
  padding: 0px 10px 10px 10px;
  display: flex;
  align-items: center;
}
.header-popup .title {
  font-weight: bold;
}

.header-popup .link-round {
}
.form-content {
  margin-top: 10px;
}
.spacer {
  flex-grow: 1;
}
.content-popup {
  padding: 0px 10px 10px 10px;
}
.content-popup .text-content {
  font-size: 13px;
  text-align: left;
  line-height: 1.3em;
}
.footer-popup {
  /* padding: 0px 10px 0px 10px; */
}
.footer-popup > div {
  border-top: solid 1px rgba(0, 0, 0, 0.05);
  padding-top: 10px;
  text-align: right;
}
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
}
</style>
