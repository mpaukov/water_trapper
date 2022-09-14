<template>
  <CheckBox />
  <Input />
</template>

<script>
import CheckBox from "./components/shared/CheckBox.vue";
import Input from "./components/shared/Input.vue";

export default {
  name: "App",
  components: {
    CheckBox,
    Input,
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
  margin-top: 60px;
}
</style>
