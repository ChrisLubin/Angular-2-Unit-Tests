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

  it('should call the api to save the changes when a new todo item is added', () => {
    // Arrage
    const spy = spyOn(service, 'add').and.callFake(todo => {
      return new Observable();
    });

    // Act
    component.add();

    // Assert
    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    // Arrage
    const todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(new Observable(subscriber => {
      subscriber.next(todo);
    }));

    // Act
    component.add();

    // Assert
    expect(component.todos[component.todos.length - 1]).toBe(todo);
  });

  it('should set the message property if the api returns an error when adding a todo', () => {
    // Arrage
    const error = 'error from the api';
    spyOn(service, 'add').and.returnValue(new Observable(subscriber => {
      subscriber.error(error);
    }));

    // Act
    component.add();

    // Assert
    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the server confirms', () => {
    // Arrage
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(new Observable());

    // Act
    component.delete(1);

    // Assert
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the server cancels', () => {
    // Arrage
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(new Observable());

    // Act
    component.delete(1);

    // Assert
    expect(spy).not.toHaveBeenCalled();
  });
});
