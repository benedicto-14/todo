import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any[], filter:string): Todo[] {

    switch (filter) {
      case 'completado':
        
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        
        return todos.filter(todo => !todo.completado);
    
      default:
        return todos;
    }

  }

}
