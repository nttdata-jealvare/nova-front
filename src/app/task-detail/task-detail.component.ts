import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Task} from '../task';
import { TaskService } from '../task.service';
import { STATUS } from '../status';

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
    private taskService: TaskService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  // SAVE
}
