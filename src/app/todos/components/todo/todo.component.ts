import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interfcae';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input('todo') todoProps!: TodoInterface;
  @Input('isEditing') isEditingProps?: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> =
    new EventEmitter();

  setTodoInEditMode() {
    this.setEditingIdEvent.emit(this.todoProps.id);
  }

  removeTodo() {}
}
