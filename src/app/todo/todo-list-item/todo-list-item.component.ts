import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delitTodo = new EventEmitter<Todo>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() saveTodo = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onKeyTitle(value: string) {
    this.todo.editTitle = value;
  }

  onKeyDescription(value: string) {
    this.todo.editDiscriptin = value;
  }
}
