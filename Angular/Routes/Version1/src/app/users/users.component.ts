import { Component, OnInit }    from '@angular/core';
import { User }                 from '../user';
import {UsersDetailsService}    from "../users-details.service";
import { switchMap }            from "rxjs/operators";
import { Observable, of }       from "rxjs";


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

  getUser( id : number ) : Observable< User >{
    return this.userService.getUser( id ) ;
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
// FIRST
//    this.userService.deleteUser( id );
//  this.updateList();

// SECOND
//    this.userService.deleteUser( id )
//        .subscribe( () => this.updateList() )

// THIRD = BUG!!!
    this.userService.deleteUser( id ).pipe(
        switchMap( () => this.userService.getUserList() )
    )
        .subscribe( ( list : User[]) => this.users = list )

  }
}
