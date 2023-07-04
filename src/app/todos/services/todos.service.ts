import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interfcae';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  constructor() {}

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };

    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
  toggleAll(isCompleted: boolean) {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      return {
        ...todo,
        isCompleted,
      };
    });

    this.todos$.next(updatedTodos);
  }

  changeFilter(filterEnum: FilterEnum) {
    this.filter$.next(filterEnum);
  }
}
