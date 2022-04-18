import { Component, OnInit } from '@angular/core';
import { TASKS } from '../mock-tasks';
import {Task} from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
