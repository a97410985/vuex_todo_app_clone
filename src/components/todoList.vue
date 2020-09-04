<template>
  <div class="todos">
    <input id="inputField" @keydown="inputFieldKeyDown" />
    <div class="todo" v-for="todo in todos" :key="todo.id">{{ todo.text }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { keyMap } from "@/interface/keycode";
@Component
export default class TodoList extends Vue {
  get todos() {
    return this.$store.getters.todos;
  }
  get inputField() {
    return document.getElementById("inputField") as HTMLInputElement;
  }
  inputFieldKeyDown(e: KeyboardEvent) {
    console.error(e.keyCode);
    if (e.keyCode === keyMap.ENTER) {
      this.$store.dispatch("createTodo", this.inputField.value);
      if (this.inputField) this.inputField.value = "";
    }
  }
}
</script>

<style scoped>
* {
  font-size: 20px;
}
.todos {
  background: rgba(104, 100, 100, 0.466);
  width: fit-content;
  margin-left: 10px;
}
.todo {
  margin-left: 10px;
}
</style>
