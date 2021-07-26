import { Action,createReducer,on } from "@ngrx/store";
import { filtrosValidos } from "./filter.actions";
import * as fromFilter from './filter.actions';

const estadoInicial:string = 'todos';

const reducer = createReducer(estadoInicial,
    on(fromFilter.SET_FILTER,(state,{ filtro })=>{
        state = filtro
        return state;
    })
);

export function filterReducer(state:string | undefined, accion:Action) {
    return reducer(state,accion);
}