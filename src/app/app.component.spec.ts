import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
 

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {TodoService} from './todos/sharedService/todos.service';

import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';


import {Observable} from 'rxjs/Observable';

let fixtureTodos = [
  { 'text': 'Angular' }
];


let angularFireDatabaseStub = { list: () => {} };
let mockTodos$ = Observable.of(fixtureTodos);

describe('AppComponent', () => {
  beforeEach(async(() => {
    spyOn(angularFireDatabaseStub, 'list').and.returnValue(mockTodos$)
    TestBed.configureTestingModule({
      
        declarations: [
          AppComponent,
          TodosComponent
        ],
        providers: [TodoService,
          {provide: AngularFireDatabase, useValue:angularFireDatabaseStub}
        ]
      
      
    }).compileComponents();
    
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
/*
  it(`should have as title 'GetItDone'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GetItDone');
  }));
  */
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
