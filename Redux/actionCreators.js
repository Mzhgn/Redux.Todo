import { addTodo, removeTodo, doTodo, getAllTodos } from "./actions.js";

function getAllTodosAction() {
  return {
    type: getAllTodos,
  };
}
function addTodoAction(title) {
  return {
    type: addTodo,
    title,
  };
}
function removeTodoAction(id) {
  return {
    type: removeTodo,
    id,
  };
}
function toDoAction(id) {
  return {
    type: doTodo,
    id,
  };
}

export { addTodoAction, removeTodoAction, toDoAction, getAllTodosAction };
