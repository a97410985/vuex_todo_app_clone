import TodoList from "../../src/components/todoList.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { Todo } from "@/interface/todo";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TodoList.vue", () => {
  let actions: any;
  let store: any;
  let getters: any;
  beforeEach(() => {
    actions = {
      createTodo: jest.fn()
    };
    getters = {
      todos: jest.fn()
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });
  it("create new todo", () => {
    const wrapper = mount(TodoList, { store, localVue });
    const input = wrapper.find("#inputField");
    (input.element as HTMLInputElement).value = "item1";
    input.trigger("keydown.enter");
    expect(actions.createTodo).toHaveBeenCalled();
  });
});
