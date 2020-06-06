import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../todo-list/todo-list.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  myForm: FormGroup;

  constructor() {

    this.myForm = new FormGroup({

      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]),

      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),

      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),

      priority: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),

      deadline: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }

  onSumbit(): void {
    this.todoSubmit.emit({
      title: this.title,
      description: this.description,
      author: this.author,
      priority: this.priority,
      deadline: this.deadline
    });

    this.title = null;
    this.description = null;
    this.deadline = null;
    this.author = null;
    this.priority = null;
  }
}
