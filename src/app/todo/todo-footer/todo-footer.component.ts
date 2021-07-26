import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actionsFilter from "../../filter/filter.actions";
import * as actionsTodo from "../todo.actions";
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  filtros:string[] = ['completado','todos','pendientes'];
  filtroActivo:string;
  pendintes:number;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(state => {
      this.filtroActivo = state;
    });
    this.store.select('todos').subscribe(state => {
      this.pendintes = this.contarPendientes(state);
    });
  }

  cambiarFiltro(filtro:string):void{
    const accion = actionsFilter.SET_FILTER({filtro:filtro});
    this.store.dispatch(accion);
  }

  contarPendientes(todos:Todo[]):number{
    //retorna los no completaos
    return todos.filter(todo => !todo.completado).length;
  }

  borrarTodo():void{
    const accion = actionsTodo.ELIMINAR_All_TODO();
    this.store.dispatch(accion);
  }

}
