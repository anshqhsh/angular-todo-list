import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // RouterModule import 추가

import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule // RouterModule 추가
  ],
  providers: [TodoService],
  bootstrap: [TodoComponent]
})
export class TodoModule { }