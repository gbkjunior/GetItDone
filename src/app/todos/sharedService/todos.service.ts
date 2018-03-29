import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class TodoService {
  todoList : AngularFireList<any>;
  constructor(private firebaseDB: AngularFireDatabase) { }

  getToDoListItems()
  {
    this.todoList = this.firebaseDB.list('ToDos');
    return this.todoList;
  }

  addToDoListItem(title: string)
  {
    this.todoList.push({
      title: title,
      checkStatus: false
    })
  }

  checkStatusOfList($key: string, flag: boolean)
  {
    this.todoList.update($key,{checkStatus:flag});

  }

  deleteItemFromList($key: string)
  {
    this.todoList.remove($key);
  }
}
