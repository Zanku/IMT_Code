import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list = [
    { name : "Вынести мусор",   status : "Working"},
    { name : "Помыть посуду",   status : "none"},
    { name : "Завладеть миром", status : "none"}
  ];

  removeItem( event ){
    this.list = Object.create( this.list.filter( ( item, i  ) => {
      return ( i !== event )
    }));
  }
}
