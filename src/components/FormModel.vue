<template>
  <div class="form-elements">
    <form @submit.prevent="onSubmit">
      <template v-for="(field, index) in fields">
        <div class="item-field" :key="index">
          <label class="label-input">
            <span v-text="field.label" />
            <strong class="err-sb" v-if="field.required" v-text="`*`" />
          </label>
          <div>
            <component
              @input="inputField"
              @change="inputField"
              :data-field="field.name"
              :is="field.model"
              :readonly="field.readOnly"
              v-bind="field.vBind || {}"
            />
          </div>
          <label class="err-message">{{ errors[field.name] }}</label>
        </div>
      </template>
      <div class="footer-popup">
        <div>
          <div>
            <button type="submit" class="link-trigger">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormModel",
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    on: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formModel: {},
      errors: {
        //   username: 'phu cave'
      },
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      // offline
      // check error
      let { on = {}, formModel } = this;
      if (Object.keys(on).length > 0 && on.hasOwnProperty("click")) {
        on.click(formModel);
      }
      this.$emit('submitted', {formModel})
      return false;
    },
    checkErrors() {
      let { formModel = {}, fields } = this;

      return formModel && fields;
    },
    inputField(e) {
    //   console.log(e);
      let fieldName = e.target.dataset.field;
      let evtTypeChange = e.target.type === "checkbox";
      let val = evtTypeChange ? e.target.checked : e.target.value;
      let { formModel } = this;
      this.formModel = {
        ...formModel,
        [fieldName]: val,
      };
    },
  },
};
</script>

<style>
.form-elements .item-field {
  margin-bottom: 10px;
}
.form-elements .item-field:last-child {
  margin-bottom: 0px;
}
.item-field {
  /* border: solid 1px red; */
  text-align: left;
}
.label-input {
  font-size: 12px;
  display: block;
  width: 100%;
}
.field-input {
  display: block;
  outline: none;
  border: none;
  background: rgb(243, 244, 245);
  padding: 5px 10px;
  border-radius: 3px;
  /* width: 100%; */
}
.field-input[type="checkbox"] {
  border: solid 1px red;
  margin: 0px;
}
.err-sb {
  color: red;
  margin-left: 2px;
}
.err-message {
  font-size: 11px;
  color: red;
  display: block;
  width: 100%;
}
</style>
