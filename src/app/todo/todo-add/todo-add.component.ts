import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import * as todoActions from "../todo.actions";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {

  textInput:FormControl;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.textInput = new FormControl('',Validators.required);
  }

  agregarTodo():void{
    if (this.textInput.valid) {
      const accion = todoActions.AGREGAR_TODO({texto:this.textInput.value});
      this.store.dispatch(accion);
      this.textInput.reset();
    }
  }

}
