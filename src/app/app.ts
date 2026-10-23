import { Component } from '@angular/core';
import { TodoService } from './services/todo'; 
import { Todo } from './models/todo'; 

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // 1. Array che conterrà la lista da stampare
  listaTask: Todo[] = [];

  // 2. Iniezione del magazzino
  constructor(private todoService: TodoService) {
    this.listaTask = this.todoService.getTodos();
  }

  // 3. Funzione richiamata dall'HTML
  aggiungi(titolo: string) {
    if (titolo.trim() !== '') {
      this.todoService.addTodo(titolo);
    }
  }
}