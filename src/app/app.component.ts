import { Component } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Component({
  selector: 'app-root', //<app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'minhas tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com dog', false));
    this.todos.push(new Todo(2, 'Ir no mercado', false));
    this.todos.push(new Todo(3, 'Cortar o cabelo', true));
  }
}
