import { Component, OnInit } from '@angular/core';
import {DefaultService} from '../services/api/default.service';
import {Task} from '../task';

/**
 *
 */
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks : Task[] = [];
  taskCompleted : Task[] = [];
  taskPending : Task[] = [];

  constructor(private taskSwaggerService: DefaultService) { }

  /**
   *
   */
  ngOnInit(): void {
    this.getTasks();
    this.getPendingTasks();
    this.getCompletedTasks();
  }

  /**
   *
   */
  getTasks(){
    this.taskSwaggerService.listTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }

  /**
   *
   * @param task
   */
  deleteTask(task: Task){
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskSwaggerService.deleteATask(task.id).subscribe(
      success =>{
        this.ngOnInit();
      }
    );
  }

  /**
   *
   */
  deleteAllTask(){
    this.taskSwaggerService.deleteAllTasks().subscribe(
      success =>{
        this.ngOnInit();
      }
    );
  }

  /**
   *
   */
  getPendingTasks(){
    this.taskSwaggerService.listPendingTasks().subscribe((dataP: any[]) => {
      this.taskPending = dataP;
    });
  }

  /**
   *
   */
  getCompletedTasks(){
    this.taskSwaggerService.listCompletedTasks().subscribe((dataC: any[]) => {
      this.taskCompleted = dataC;
    });
  }
}
