import { Injectable } from '@angular/core';
import { List } from "./list";
import { Status } from "./status";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

   list : List[] = [
    { name : "Вынести мусор",   status : "Working"},
    { name : "Помыть посуду",   status : "Hover"   },
    { name : "Завладеть миром", status : "Hover"   }
  ];

  private status : Status[] = [
    { condition : "Hover",    color : "red"   },
    { condition : "Working",  color : "yellow"},
    { condition : "Done",     color : "green" }
  ];

  getStatus (){
    return this.status;
  }

  getList (){
    return this.list;
  }

  addNewItem( item : List[] ){
    this.list.push( item );
  }

  removeTargetItem( index : number ){
    this.list = Object.create( this.list.filter( ( item, i  ) => {
      return ( i !== index )
    }));
  }
}
