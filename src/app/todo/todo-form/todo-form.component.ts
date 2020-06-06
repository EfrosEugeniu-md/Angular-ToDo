import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() todoSubmit = new EventEmitter<Todo>();

  title: string;
  description: string;
  author: string;
  priority: string;
  deadline: Date;

  onSumbit(): void {
    this.todoSubmit.emit({
      title: this.title, description: this.description, author: this.author, priority: this.priority, deadline: this.deadline
    });

    this.title = null;
    this.description = null;
    this.deadline = null;
    this.author = null;
    this.priority = null;
  }
}
