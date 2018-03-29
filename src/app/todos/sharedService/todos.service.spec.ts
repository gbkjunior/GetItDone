import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todos.service';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

let fixtureTodos = [
  { 'text': 'Get milk' }
];


let angularFireDatabaseStub = { list: () => {} };
let mockTodos$ = Observable.of(fixtureTodos);


describe('TodoService', () => {
  beforeEach(() => {
    spyOn(angularFireDatabaseStub, 'list').and.returnValue(mockTodos$);
    TestBed.configureTestingModule({
      providers: [TodoService,
        {provide: AngularFireDatabase, useValue:angularFireDatabaseStub}
      ]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
