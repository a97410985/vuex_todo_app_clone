import Vue from "vue";
import Vuex from "vuex";
import { Todo } from "@/interface/todo";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [] as Todo[]
  },
  mutations: {
    createTodo(state, payload: { text: string }) {
      state.todos.push({
        id: uuidv4(),
        text: payload.text,
        completed: false
      });
    }
  },
  actions: {
    createTodo(context, text: string) {
      context.commit("createTodo", { text: text });
    }
  },
  modules: {},
  getters: {
    todos(state) {
      return state.todos;
    }
  }
});
