import { Component, signal } from '@angular/core';
import { Todos } from './todos/todos';

@Component({
  imports: [Todos],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
