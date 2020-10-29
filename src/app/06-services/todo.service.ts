import { HttpClient } from '@angular/common/http';

export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  add(todo) {
    return this.httpClient.post('...', todo);
  }

  getTodos() {
    return this.httpClient.get('...');
  }

  delete(id) {
    return this.httpClient.delete('...');
  }
}
