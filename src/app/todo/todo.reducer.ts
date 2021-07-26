import { Todo } from "./model/todo.model";
import { Action, createReducer, on } from '@ngrx/store';
import * as fromTodo from "./todo.actions";

const t1 = new Todo('bañarse');
const t2 = new Todo('comer');
const t3 = new Todo('hacer tarea');
t2.completado = true;

const estadoInicial:Todo[] = [t1,t2,t3];

//funcion reducer recibe el estado inicial y la accion a realizar
const reducer = createReducer(estadoInicial,
    
    on(fromTodo.AGREGAR_TODO,(state,{ texto }) => {
        
        const todo = new Todo(texto);
        return [...state,todo];

    }),
    on(fromTodo.TOGGLE_TODO,(state,{ id }) => {
        //map retorna un nuevo arreglo
        return state.map(todoEdit => {
            if(todoEdit.id === id){
                return {
                    ...todoEdit,
                    completado: !todoEdit.completado
                }
            }else{
                return todoEdit;
            }
        });

    }),
    on(fromTodo.EDITAR_TODO,(state,{ id,texto }) => {

        return state.map(todoEdit => {
            if(todoEdit.id === id){
                return {
                    ...todoEdit,
                    texto: texto
                }
            }else{
                return todoEdit;
            }
        });

    }),
    on(fromTodo.ELIMINAR_TODO,(state,{ id }) => {
        //retornar un nuevo arreglo con los que cumplan la siguiente condicion
        return state.filter(todoEdit => todoEdit.id !== id);

    }),
    on(fromTodo.ELIMINAR_All_TODO,(state) => {
        
        return state.filter(todo => !todo.completado);

    }),
    on(fromTodo.TOGGLE_ALL_TODO,(state,{ completado }) => {
        
        return state.map(todoEdit => {
            return {
                ...todoEdit,
                completado: completado
            }
        });

    }),

);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return reducer(state, action);
}