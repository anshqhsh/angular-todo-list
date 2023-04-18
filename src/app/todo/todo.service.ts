import { Injectable } from '@angular/core';
import { TodoType } from './todo.interface';


@Injectable()
export class TodoService {
  private todos: TodoType[] = [
    { id: 1, title: 'Todo 1', completed: true },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: true },
    { id: 4, title: 'Todo 4', completed: true }
  ];

  

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo = { id: this.todos.length + 1, title , completed: false};
    this.todos.push(newTodo);
  }
  updateTodo(id:number, values={}) {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  deleteTodo(todo:TodoType) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  getTodoById(id:number) {
    return this.todos.filter(todo => todo.id === id).pop();
  }
}