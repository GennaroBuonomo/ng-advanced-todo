import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  @Input({ required: true }) task!: Todo;
  @Output() cambiaStato = new EventEmitter<string>();
  @Output() eliminaTask = new EventEmitter<string>();
}