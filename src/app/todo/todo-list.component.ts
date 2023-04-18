import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoType } from './todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos"> 
        <div *ngIf="!editMode[todo.id]">
          <span>{{ todo.title }}</span>
          <button (click)="delete(todo)">Delete</button>
          <button (click)="editTodo(todo)">edit</button>
        </div>
        <div *ngIf="editMode[todo.id]">
          <input type="text" [(ngModel)]="todo.title">
          <button (click)="updateTodo(todo)" (keyup.enter)="updateTodo(todo)">update</button>
          <button (click)="onCancel(todo)">cancel</button>
        </div>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  todos: TodoType[] = [];
  
  editMode: { [id: number]: boolean } = {}; // 수정 모드 여부를 저장하는 객체
  editedTodo : TodoType | undefined

  constructor(private todoService: TodoService) {}
  
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  delete(todo: TodoType) {
    this.todoService.deleteTodo(todo);
    this.todos = this.todoService.getTodos();
  }
  updateTodo(todo: TodoType): void {
    if (this.editedTodo) {
      this.todoService.updateTodo(this.editedTodo.id, this.editedTodo);
      this.editedTodo = undefined;
    }
    this.editMode[todo.id] = false
  }
  editTodo(todo: TodoType) {
    this.editMode[todo.id] = true
    this.editedTodo = todo;
  }
  onCancel(todo: TodoType) {
    this.editMode[todo.id] = false
  }
}