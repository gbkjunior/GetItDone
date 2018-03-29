import { Component, OnInit } from '@angular/core';
import {TodoService} from './sharedService/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]

})
export class TodosComponent implements OnInit {
  todoListArray: any[];
  constructor(private todoService: TodoService) { }


  ngOnInit() {
  this.todoService.getToDoListItems().snapshotChanges().subscribe(
    item => {
      this.todoListArray = [];
      item.forEach(element => {
        var listItem = element.payload.toJSON();
        listItem["$key"] = element.key;
        this.todoListArray.push(listItem); 
      })

      // sort array based on check status
    
      this.todoListArray.sort((a,b)=> {
        return a.checkStatus - b.checkStatus;
      }) 

      console.log(this.todoListArray);

      
      
    }
    )
    
  }

  addItemToList(itemTitle)
  {
    
    if(itemTitle.value!="" && itemTitle.value.trim()!="")
    {
      this.todoService.addToDoListItem(itemTitle.value.trim());
      itemTitle.value=null;
 
    }
    else{
      alert("Come on, let's do something productive today.")
      
    }
  }

  checkStatusOfItem($key:string, checkStatus)
  {
    this.todoService.checkStatusOfList($key,!checkStatus);
  }

  removeItemFromList($key:string)
  {
    this.todoService.deleteItemFromList($key);
  }
}
