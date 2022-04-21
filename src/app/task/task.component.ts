import { Component, OnInit } from '@angular/core';
import {DefaultService} from '../services/api/default.service';
import {Task} from '../task';

/**
 * Component of a tasks
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
   * Retrieve all data from services on init
   */
  ngOnInit(): void {
    this.getTasks();
    this.getPendingTasks();
    this.getCompletedTasks();
  }

  /**
   * Retrieve tasks from service and
   * set into the task array
   */
  getTasks(){
    this.taskSwaggerService.listTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }

  /**
   * Delete a task from the list
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
   * Delete all storage tasks
   */
  deleteAllTask(){
    this.taskSwaggerService.deleteAllTasks().subscribe(
      success =>{
        this.ngOnInit();
      }
    );
  }

  /**
   * Get tasks with status="Pending"
   */
  getPendingTasks(){
    this.taskSwaggerService.listPendingTasks().subscribe((dataP: any[]) => {
      this.taskPending = dataP;
    });
  }

  /**
   * Get tasks with status="Completed"
   */
  getCompletedTasks(){
    this.taskSwaggerService.listCompletedTasks().subscribe((dataC: any[]) => {
      this.taskCompleted = dataC;
    });
  }
}
