import { Injectable } from '@angular/core';
import { User } from "./user";
import { Observable, of } from "rxjs";


let userList : User[] = [
    { id : 0, name : "Adam",   surname : "Smith",   email : "asdas@gmail.com" },
    { id : 1, name : "Fedor",  surname : "Bubkin",  email : "babaika@i.ua" },
    { id : 2, name : "Eva",    surname : "Johnson", email : "johnson@i.ua" },
    { id : 3, name : "Hope",   surname : "Trump",   email : "iamgod@i.ua" },
    { id : 4, name : "Celine", surname : "Dion",    email : "dion@i.ua" },
    { id : 5, name : "Fedor",  surname : "Sumkin",  email : "f_sumkin99@i.ua" }
]

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {

  constructor( ) { }


  getUserList() : Observable< User[] >{
    return of( userList );
  }

  getUser( i : number ) : Observable< User >{
    return of( userList.find( ({id}) => id === i ) );
  }

  deleteUser( i : number ) : Observable< null >{
      console.log( userList );
    userList = userList.filter( ({id}) => id !== i );
      console.log( userList );
    return of( null )
  }
}
