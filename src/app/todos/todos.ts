import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todos!: Todo[];
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'First ToDo', completed: false },
      { content: 'Second ToDo', completed: true },
    ];
  }
}
