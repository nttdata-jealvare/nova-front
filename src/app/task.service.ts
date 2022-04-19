import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Task} from './task';
import {TASKS} from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    const tasks = of(TASKS);
    return tasks;
  }

  getTask(id: number){
    const task = TASKS.find(h => h.id === id)!;
    return of(task);
  }
}
