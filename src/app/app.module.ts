import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CounterComponent } from './counter/counter.component';

import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListItemComponent } from './todo/todo-list-item/todo-list-item.component';
import { FilterTodosPipe } from './todo/filter-todos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CounterComponent,

    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoListItemComponent,
    FilterTodosPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
