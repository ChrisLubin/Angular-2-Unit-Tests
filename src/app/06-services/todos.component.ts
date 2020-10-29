
import { OnInit } from '@angular/core';
import { TodoService } from './todo.service'

export class TodosComponent implements OnInit {
  public todos: any[] = [];
  public message: any;

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add(): void {
    const newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id: number): void {
    if (confirm('Are you sure?')){
      this.service.delete(id).subscribe();
    }
  }
}
