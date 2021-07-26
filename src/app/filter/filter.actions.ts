import { createAction,props } from "@ngrx/store";

export type filtrosValidos = 'completado' | 'todos' | 'pendientes';

export const SET_FILTER = createAction('[FILTER] Set Filter',
    props<{filtro:string}>()
);