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
  aUser : User;
  constructor( private userService : UsersDetailsService ){
    this.aUser = userService.getUser( 1 );
    this.users = userService.getUserList();
  }

  ngOnInit(){
  }

  getUser( id ){
    return this.aUser;
  }

  getUsersList(){
    return this.users;
  }
}
