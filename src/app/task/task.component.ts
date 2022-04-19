import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { STATUS } from '../status';
import {Task} from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks : Task[] = [];
  status = STATUS;

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(t => t !== task);
    // DEL
  }

  // FILTERS
  getPendingTasks(){
    return this.tasks.filter((task) => task.status === "Pending");
  }

  getCompletedTasks(){
    return this.tasks.filter((task) => task.status === "Completed");
  }
}
