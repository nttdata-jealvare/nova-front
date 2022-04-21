import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import {DefaultService} from '../services/api/default.service';
import {Task} from '../task';
import { STATUS } from '../status';

/**
 * Component of a new task
 */
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  tasks : Task[] = [];
  task : Task | undefined;
  status : string[] = STATUS;

  constructor(
              private taskSwaggerService: DefaultService,
              private location : Location
              ) { }

  /**
   * Default init
   */
  ngOnInit(): void {

  }

  /**
   * Add a new task entering a description
   *
   * As a new task it must have a status of new
   *
   * @param descr
   * @returns empty if there is no description
   */
  add(descr: string): void {
    if (!descr) { return; }

    var newTask : Task = {id: 0, description: descr, status: "New"};

    this.taskSwaggerService.addNewTask(newTask)
      .subscribe((task : any) => {
        //this.tasks.push(task);
        this.location.back();
      });
  }

  /**
   * Cancel this form and go back to the previous
   * page to avoid insert something
   */
  cancel(): void {
    this.location.back();
  }
}
