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

window.removeTodoHandler = removeTodoHandler;
window.completeTodoHandler = completeTodoHandler;

const todoInputElem = document.querySelector(".todo-input");
const todoButtonElem = document.querySelector(".todo-button");
const todosContainer = document.querySelector(".todo-list");
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
      let copyState = [...state];
      let newState = copyState.filter((todo) => todo.id !== action.id);
      return newState;
    }
    case doTodo: {
      let newState = [...state];
      newState.some((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });

      return newState;
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
  generateTodosInDom(todos);
  todoInputElem.value = "";
});

function removeTodoHandler(todoID) {
  store.dispatch(removeTodoAction(todoID));
  const todos = store.getState();
  generateTodosInDom(todos);
}

function completeTodoHandler(todoID) {
  store.dispatch(toDoAction(todoID));
  const todos = store.getState();
  generateTodosInDom(todos);
}
function generateTodosInDom(todos) {
  todosContainer.innerHTML = " ";
  todos.forEach((todo) => {
    todosContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="todo ${todo.isCompleted && "completed"}">
          <li class="todo-item">${todo.title}</li>
          <button class="complete-btn" onclick=completeTodoHandler("${
            todo.id
          }")>
            <i class="fas fa-check-circle"></i>
          </button>
          <button class="trash-btn" onclick=removeTodoHandler("${todo.id}")>
            <i class="fas fa-trash"></i>
          </button>
        </div> 
      `
    );
  });
}
