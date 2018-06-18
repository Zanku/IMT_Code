import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { User } from '../user';
import {UsersDetailsService} from "../users-details.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor( private userService : UsersDetailsService ){
    this.updateList();
  }

  ngOnInit(){
  }

  getUser( id : number ){
    return this.userService.getUser( id );
  }

  getUsersList(){
    return this.users;
  }

  updateList(){
//    this.users = this.userService.getUserList()
    this.userService.getUserList().subscribe( (data) => {
      this.users = data;
    } )
  }

  deleteUser( id : number ){
//    this.userService.deleteUser( id );
    this.userService.deleteUser( id )
        .subscribe( () => this.updateList() )
  //  this.updateList();
  }
}
