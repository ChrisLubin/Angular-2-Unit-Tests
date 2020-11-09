import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the api', () => {
    // Arrange
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return new Observable(subscriber => {
        subscriber.next(todos);
      });
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(component.todos).toBe(todos);
  });
});
