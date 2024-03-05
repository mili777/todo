import { createAction, props } from "@ngrx/store";
import { TodoModel } from "./todos.states";

const addTodoAction = createAction("[TODO] ADD_TODO", props<TodoModel>())
const updateTodoAction = createAction("[TODO] UPDATE_TODO", props<TodoModel>())
const deleteTodoAction = createAction("[TODO] DELETE_TODO", props<TodoModel>())

export const loadTodos = createAction('[Todo List] Load Todos');
export const loadTodosSuccess = createAction('[Todo List] Load Todos Success', props<{todos: TodoModel[]}>());
export const loadTodosError = createAction('[Todo List] Load Todos Error');

export const actions = {addTodoAction, updateTodoAction, deleteTodoAction}