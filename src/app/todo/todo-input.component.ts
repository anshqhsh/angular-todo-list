import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-input',
  template: `
    <form (submit)="addTodo()">
      <input type="text" [(ngModel)]="title" placeholder="Todo" name="todo-input">
      <button type="submit">Add</button>
    </form>
  `
})
export class TodoInputComponent {
  title = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    this.todoService.addTodo(this.title);
    this.title = '';
  }
}