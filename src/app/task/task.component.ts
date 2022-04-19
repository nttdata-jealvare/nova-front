import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { STATUS } from '../status';
import {Task} from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks = TASKS;
  status = STATUS;

  constructor() { }

  ngOnInit(): void {
  }

}
