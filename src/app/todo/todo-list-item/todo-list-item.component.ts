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

  constructor() { }

  ngOnInit(): void {
  }
}
