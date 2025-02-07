import {
  addTodo,
  removeTodo,
  doTodo,
  filterAllTodos,
  filterCompletedTodos,
  filterIncompletedTodos,
} from "../Redux/actions.js";

import {
  addTodoAction,
  removeTodoAction,
  toDoAction,
} from "../Redux/actionCreators.js";

const todoInputElem = document.querySelector(".todo-input");
const todoButtonElem = document.querySelector(".todo-button");

// creating Reducer
function todolistReducer(state = [], action) {
  switch (action.type) {
    case addTodo: {
      console.log(action);
      let newState = [...state];
      let newTodoObj = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: false,
      };
      newState.push(newTodoObj);
      return newState;
    }
    case removeTodo: {
      return state;
    }
    case doTodo: {
      return state;
    }
    case filterAllTodos: {
      return state;
    }
    case filterCompletedTodos: {
      return state;
    }
    case filterIncompletedTodos: {
      return state;
    }
    default: {
      return state;
    }
  }
}

// Create Store

const store = Redux.createStore(todolistReducer);
console.log(store);

todoButtonElem.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodoTitle = todoInputElem.value.trim();
  store.dispatch(addTodoAction(newTodoTitle));
  const todos = store.getState();
  console.log(todos);
  todoInputElem.value = "";
});
