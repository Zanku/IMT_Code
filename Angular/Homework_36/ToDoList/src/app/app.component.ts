import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list = [
    { name : "Вынести мусор",   status : "Working"},
    { name : "Помыть посуду",   status : "Hover"   },
    { name : "Завладеть миром", status : "Hover"   }
  ];

  status = [
    { condition : "Hover",    color : "red"   },
    { condition : "Working",  color : "yellow"},
    { condition : "Done",     color : "green" }
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
