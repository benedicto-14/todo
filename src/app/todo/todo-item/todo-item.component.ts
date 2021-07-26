import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import * as todoAction from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  chkField:FormControl;
  txtInput:FormControl;
  editando:boolean;
  @ViewChild('txtInputFisico') txtInputFisico:ElementRef;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(()=>{
      const accion = todoAction.TOGGLE_TODO({id:this.todo.id});
      this.store.dispatch(accion);
    });
  }

  editar():void{
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;
    this.editando = false;
    const accion = todoAction.EDITAR_TODO({id:this.todo.id,texto:this.txtInput.value});
    this.store.dispatch(accion);
  }

  eliminarTodo(){
    const accion = todoAction.ELIMINAR_TODO({id:this.todo.id});
    this.store.dispatch(accion);
  }

}
