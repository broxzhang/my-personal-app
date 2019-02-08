import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() { }
  getTodos() {
    return [...this.todos];
  }
  addTodo(name: string, status: string, priority: string) {
    const todo: Todo = {
      name: name,
      status: status,
      priority: priority
    };
    this.todos.push(todo);
  }
}
