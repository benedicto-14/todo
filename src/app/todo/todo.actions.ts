import { createAction, props } from '@ngrx/store';

//acciones a relizar en el state
export const AGREGAR_TODO = createAction('[TODO] Agregar Todo',
    props<{texto:string}>()
);

export const TOGGLE_TODO = createAction('[TODO] Toggle Todo',
    props<{id:number}>()
);

export const EDITAR_TODO = createAction('[TODO] Editar Todo',
    props<{id:number,texto:string}>()
);

export const ELIMINAR_TODO = createAction('[TODO] Eliminar Todo',
    props<{id:number}>()
);

export const ELIMINAR_All_TODO = createAction('[TODO] Eliminar Todo');

export const TOGGLE_ALL_TODO = createAction('[TODO] Toggle All Todo',
    props<{completado:boolean}>()
);