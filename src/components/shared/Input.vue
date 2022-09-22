<template>
  <input
    :type="type"
    :min="min"
    :max="max"
    :value="value"
    :disabled="disabled"
    class="input"
  />
</template>

<script>
export default {
  name: "DefaultInput",
  props: {
    type: {
      type: String,
      default: "number",
    },
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  text-align: right;
}
</style>