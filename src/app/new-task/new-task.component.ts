import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService } from '../task.service';
import {DefaultService} from '../services/api/default.service';
import {Task} from '../task';
import { STATUS } from '../status';

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
              private taskService : TaskService,
              private taskSwaggerService: DefaultService,
              private location : Location
              ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  add(descr: string): void {
    if (!descr) { return; }
    var newTask : Task = {id: 0, description: descr, status: "New"};
    this.taskSwaggerService.addNewTask(newTask)
      .subscribe((task : any) => {
        this.tasks.push(task);
        this.location.back();
      });
  }

  cancel(): void {
    this.location.back();
  }
}
