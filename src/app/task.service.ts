import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {TASKS} from './mock-tasks';
/**
 * This service retrieve information from mock-up models
 * ! Deprecated service has been changed to DefaultService
 */
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  /**
   * Get all mock-up tasks
   * @returns Task array
   */
  getTasks(){
    const tasks = of(TASKS);
    return tasks;
  }

  /**
   * Get a specific task looked for by the id
   * @param id
   * @returns Task or null
   */
  getTask(id: number){
    const task = TASKS.find(h => h.id === id)!;
    return of(task);
  }
}
