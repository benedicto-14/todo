import { Action,ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todo/model/todo.model";
import * as fromTodo from "./todo/todo.reducer";
import * as fromFilter from "./filter/filter.reducer";

//declararse varios states
export interface AppState{
    todos:Todo[];
    filtro:string;
}

//declaramos todos los reducer
export const appReducers:ActionReducerMap<AppState> ={
    todos:fromTodo.todoReducer,
    filtro:fromFilter.filterReducer
}