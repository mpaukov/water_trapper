<template>
  <ul class="inputs-wrapper">
    <li v-for="item in inputsDefaultData" :key="item.id" :id="item.id">
      <CheckBox :checked="item.checked" @click="handleCheckBox" />
      <Input
        :disabled="!item.checked"
        :value="item.value"
        @change="handleInput"
      />
    </li>
  </ul>

  <div class="mainBox">
    <div v-for="i in array.length" :key="i" class="column">
      <template v-if="array[i - 1] !== 0">
        <div v-for="j in array[i - 1]" :key="j" class="box"></div>
      </template>
      <template v-else>
        <div class="box box--zero"></div>
      </template>
      <template v-for="k in water[i - 1]" :key="k">
        <div class="box box--water"></div>
      </template>
    </div>
  </div>
</template>

<script>
import CheckBox from "./components/shared/CheckBox.vue";
import Input from "./components/shared/Input.vue";
import { data } from "./utils/data";

export default {
  name: "App",
  components: {
    CheckBox,
    Input,
  },
  data() {
    return {
      inputsDefaultData: data,
    };
  },
  computed: {
    array() {
      return this.inputsDefaultData
        .filter((input) => input.checked)
        .map((el) => el.value);
    },
    water() {
      let left = 0;
      let right = this.array.length - 1;
      let leftMax = this.array[left];
      let rightMax = this.array[right];
      const waterArr = [
        { pos: left, val: 0 },
        { pos: right, val: 0 },
      ];
      while (left < right - 1) {
        if (leftMax < rightMax) {
          left += 1;
          leftMax = Math.max(leftMax, this.array[left]);
          waterArr.push({ pos: left, val: leftMax - this.array[left] });
        } else {
          right -= 1;
          rightMax = Math.max(rightMax, this.array[right]);
          waterArr.push({ pos: right, val: rightMax - this.array[right] });
        }
      }
      return waterArr.sort((a, b) => a.pos - b.pos).map((el) => el.val);
    },
  },
  methods: {
    handleCheckBox(e) {
      const id = +e.target.parentNode.id;
      this.inputsDefaultData = [...this.inputsDefaultData].map((input) => {
        if (input.id === id) {
          input.checked = !input.checked;
        }
        return input;
      });
    },
    handleInput(e) {
      const id = +e.target.parentNode.id;
      const value = +e.target.value;
      if (value < 0 || value > 10) {
        return;
      }
      this.inputsDefaultData = [...this.inputsDefaultData].map((input) => {
        if (input.id === id) {
          input.value = value;
        }
        return input;
      });
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
  margin-top: 60px;
}
.inputs-wrapper {
  display: flex;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  margin-bottom: 30px;
}
.mainBox {
  display: flex;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000000;
}
.column {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}
.box {
  border: 1px solid #ffffff;
  background-color: #2c3e50;
  height: 40px;
}
.box--zero {
  height: 0;
  border: none;
}
.box--water {
  background-color: #047df5;
}
</style>
