import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  add(todo: any): Observable<any> {
    return this.httpClient.post<any>('...', todo);
  }

  getTodos(): Observable<any> {
    return this.httpClient.get<any>('...');
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('...');
  }
}
