import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Observable, filter, map } from 'rxjs';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  noTodoClass$: Observable<boolean>;
  activeCounts$: Observable<number>;
  itemLeftText$: Observable<string>;
  filter$: Observable<FilterEnum>;

  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) {
    this.activeCounts$ = this.todosService.todos$.pipe(
      map((todos) => {
        return todos.filter((todo) => !todo.isCompleted).length;
      })
    );

    this.itemLeftText$ = this.activeCounts$.pipe(
      map((activeCount) => {
        return `item${activeCount !== 1 ? 's' : ''} left`;
      })
    );

    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    this.filter$ = this.todosService.filter$;
  }

  changeFilter(event: Event, filterEnum: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterEnum);
  }
}
