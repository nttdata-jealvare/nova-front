import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Task} from '../task';
import { STATUS } from '../status';
import {DefaultService} from '../services/api/default.service';

/**
 * Component of a task details
 */
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;
  status = STATUS;

  constructor(
    private route: ActivatedRoute,
    private taskSwaggerService: DefaultService,
    private location: Location
    ) { }

  /**
   * Initialize the task that will operate with
   */
  ngOnInit(): void {
    this.getTask();
  }

  /**
   * Retrieve the task with which we will extract
   * all information
   */
  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskSwaggerService.getATask(id).subscribe((task : any) => this.task = task);
  }

  /**
   * Go back to the previous page to avoid
   * insert something
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Update task information
   * @param task
   */
  updateTask(task: Task): void {
    this.taskSwaggerService.addNewTask(task).subscribe(
      success => {
        this.location.back();
      }
    );
  }
}
