import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import {AngularFireDatabase} from 'angularfire2/database';
import {TodoService} from './sharedService/todos.service';

import {Observable} from 'rxjs/Observable';
import { AppComponent } from '../app.component';

let fixtureTodos = [
  { 'text': 'Get firebase' }
];

let angularFireDatabaseStub = { list: () => {} };
let mockTodos$ = Observable.of(fixtureTodos);

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    spyOn(angularFireDatabaseStub, 'list').and.returnValue(mockTodos$);
    TestBed.configureTestingModule({
      
      declarations: [ TodosComponent, AppComponent ],
      providers: [TodoService,
        {provide: AngularFireDatabase, useValue:angularFireDatabaseStub}
      ]
    })
        // create component and test fixture
        fixture = TestBed.createComponent(TodosComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    component.todoListArray = [{
      title: "My todo List",
      checkStatus: false
    }]
    fixture.detectChanges();
  });

  it('should create', async(() => {
    const fixture = TestBed.createComponent(TodosComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
