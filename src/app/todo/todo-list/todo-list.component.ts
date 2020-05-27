import { Component, Input } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
  modify?: boolean;
  editTitle?: string;
  editDiscriptin?: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todos: Todo[];
  titleHovered: string;
  searshType = true;
  searsWord: string;

  onItemHover(title: string): void {
    this.titleHovered = title;
  }

  onDelitItem(todo: Todo) {
    this.todos = this.todos.filter(item => item.title !== todo.title);
  }

  onEditItem(todo: Todo){
    const todoForEdit = this.todos.find(item => item.title === todo.title);
    todoForEdit.modify = !todoForEdit.modify;

  }

  onSaveItem(todo: Todo) {
    const todoForEdit = this.todos.find(item => item.title === todo.title);
    todoForEdit.title = todoForEdit.editTitle ? todoForEdit.editTitle : todoForEdit.title;
    todoForEdit.description = todoForEdit.editDiscriptin ? todoForEdit.editDiscriptin : todoForEdit.description;
    todoForEdit.modify = !todoForEdit.modify;
  }
}
