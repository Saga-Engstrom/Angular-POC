import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todos!: Todo[];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'First ToDo', completed: false },
      { content: 'Second ToDo', completed: true },
    ];
  }

  toggleDone(id: number) {
    this.todos.forEach((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
