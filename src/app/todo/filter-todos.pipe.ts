import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todo-list/todo-list.component';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchByTitle: boolean, searchByWord?: string, ): Todo[] {
    searchByWord  = searchByWord?.trim();

    if (!searchByWord) { return todos; }

    if (searchByTitle) { return todos.filter((todo) => todo.title.toLowerCase().includes(searchByWord.toLowerCase())); }

    return todos.filter((todo) => todo.description.toLowerCase().includes(searchByWord.toLowerCase()));
  }

}
