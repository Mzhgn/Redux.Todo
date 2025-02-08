import { addTodo, removeTodo, doTodo } from "./actions.js";

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

export { addTodoAction, removeTodoAction, toDoAction };
