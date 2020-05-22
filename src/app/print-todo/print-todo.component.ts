import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-print-todo',
  templateUrl: './print-todo.component.html',
  styleUrls: ['./print-todo.component.scss'],
})
export class PrintTodoComponent implements OnInit {
  constructor() {}

  @Input() todo: Todo = new Todo();
  @Output() delete = new EventEmitter<Todo>();

  ngOnInit(): void {}

  completed() {
    this.todo.isDone = !this.todo.isDone;
  }
  isDeleted() {
    this.delete.emit(this.todo);
  }
}
