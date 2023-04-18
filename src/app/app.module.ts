import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule import 추가
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router'; // 추가
import { TodoComponent } from './todo/todo.component';
import { TodoModule } from './todo/todo.module';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot(routes) // 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
