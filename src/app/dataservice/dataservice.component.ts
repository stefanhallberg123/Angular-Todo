import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.scss'],
})
export class DataserviceComponent implements OnInit {
  constructor() {}

  todos: Todo[] = [];
  id = 1;
  isDone = true;

  notdone = 'otherclass';
  done = 'doneclass';

  addTodo(todoTitle: string) {
    const newTodo = new Todo();
    newTodo.title = todoTitle;
    newTodo.isDone = false;
    newTodo.id = this.id++;
    this.todos.push(newTodo);
  }

  deleteTodo(todo: Todo) {
    console.log(todo.id + ' raderad');
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === todo) {
        this.todos.splice(i, 1);
      }
    }
  }
  sortTodo() {
    this.todos.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  ngOnInit(): void {}
}
