<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "./components/todoList.vue";

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style></style>
