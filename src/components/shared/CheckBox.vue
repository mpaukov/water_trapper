<template>
  <input type="checkbox" :checked="checked" />
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>