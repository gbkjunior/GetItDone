import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabaseProvider, AngularFireList} from 'angularfire2/database'; 
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { environment } from '../environments/environment';
import { TodosComponent } from './todos/todos.component';
import {TodoService} from './todos/sharedService/todos.service'
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
