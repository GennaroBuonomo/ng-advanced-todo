import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private todos: Todo[] = [];

  constructor() { 
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.todos = JSON.parse(saved);
    }
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    const newTask: Todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
      createdAt: Date.now()
    };
    this.todos.push(newTask);
    this.saveData();
  }

  deleteTodo(id: string) {
   // Sovrascrive l'array tenendo solo i task con un ID  diverso da quello cliccato
   this.todos = this.todos.filter(task => task.id !== id);
   this.saveData(); // Salva nel localStorage il nuovo  array senza quel task
  } 

  private saveData() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}