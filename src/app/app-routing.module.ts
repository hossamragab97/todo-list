import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'todo-list' , component:TodoListComponent},
  {path:'' , redirectTo:'/todo-list' , pathMatch:'full'},
  {path:'**' , redirectTo:'/todo-list' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
