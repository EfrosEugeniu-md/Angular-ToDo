import { Component, Input } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todos: Todo[];
  titleHovered: string;

  onItemHover(title: string): void {
    this.titleHovered = title;
  }

  onDelitItem(todo: Todo) {
    this.todos = this.todos.filter(item => item.title !== todo.title);
  }
}
