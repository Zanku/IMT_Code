import {Component, OnInit}    from '@angular/core';
import { DataServiceService } from "./data-service.service";
import { List }   from "./list";
import { Status } from  "./status";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataServiceService]
})
export class AppComponent implements OnInit {

  constructor( private dataService : DataServiceService){}

    list :   List[] = [];
  status : Status[] = [];

  addItem( item : List[] ){
    this.dataService.addNewItem( item );
  }

  removeItem( index : number ){
    this.dataService.removeTargetItem( index )
    this.list = this.dataService.getList();
  }

  ngOnInit(){
    this.list   = this.dataService.getList();
    this.status = this.dataService.getStatus();
  }
}
