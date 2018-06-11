import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list = [
    { name : "Вынести мусор",   status : "Working"},
    { name : "Помыть посуду",   status : "hover"   },
    { name : "Завладеть миром", status : "hover"   }
  ];

  status = [
    { condition : "hover",    color : "red"   },
    { condition : "Working",  color : "yellow"},
    { condition : "done",     color : "green" }
  ];


  addItem( item ){
    this.list.push( item );
  }

  removeItem( event ){
    this.list = Object.create( this.list.filter( ( item, i  ) => {
      return ( i !== event )
    }));
  }
}
