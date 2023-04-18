import { Component } from '@angular/core';


@Component({
  selector: 'app-todo',
  template: `<h1>Todo Component?</h1>
            <app-todo-input></app-todo-input>
            <app-todo-list></app-todo-list>
            `,
})
export class TodoComponent { }