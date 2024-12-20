import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  newTask =''
  isList = true
  allList = localStorage.getItem('list') ?  JSON.parse(localStorage.getItem('list'))  : []
  allDone = localStorage.getItem('done') ?  JSON.parse(localStorage.getItem('done'))  : []

  constructor(private toasterService: ToastrService) { 
  }

  ngOnInit(): void {
  } 

  add(){
    this.toasterService.success(`Todo ${this.newTask} Added`);
    this.allList.push(this.newTask)
    localStorage.setItem('list' , JSON.stringify(this.allList))
    this.newTask = ''
  }

  done(item , ind){
    this.allList.splice(ind,1)
    this.allDone.push(item)
    localStorage.setItem('list' , JSON.stringify(this.allList))
    localStorage.setItem('done' , JSON.stringify(this.allDone))
    this.toasterService.success(`Todo ${item} Added To Done`);
  }

  deleteTask(item ,ind){
    this.allList.splice(ind,1)
    localStorage.setItem('list' , JSON.stringify(this.allList))
    this.toasterService.error(`Todo ${item} Deleted`);
  }

  deleteTaskDone(item,ind){
    this.allDone.splice(ind,1)
    localStorage.setItem('done' , JSON.stringify(this.allDone))
    this.toasterService.error(`Todo ${item} Deleted`);
  }

}