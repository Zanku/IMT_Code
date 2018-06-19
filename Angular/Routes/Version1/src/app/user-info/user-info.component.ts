import { Component, OnInit }   from '@angular/core';
import { UsersDetailsService } from "../users-details.service";
import {ActivatedRoute, ParamMap, Params}      from "@angular/router";
import { User }                from "../user";
import { map, switchMap }                 from "rxjs/operators";

@Component({
     selector: 'app-user-info',
  templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  aUser : User;
  parNum : number;

  constructor(
      private usersService : UsersDetailsService,
      private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){

// FIRST
    //this.user = this.usersService.getUser( 1 );

    // Observable с текущем состоянием параметров
    // this.route.paramMap
    //     .subscribe( ( params : Params ) => console.log( params.get('id') ) )

// SECOND
//     this.route.paramMap.pipe(
//         map( (params : ParamMap) => params.get('id') )
//     )
//         .subscribe( ( id ) => console.log( id ) )
//
//     this.usersService
//         .getUser( 1 )
//         .subscribe( ( data : User) => this.aUser = data );
//   }
//THIRD
//        console.log( this.route.paramMap );
        // this.route.paramMap.pipe(
        //   map( (params : ParamMap) => params.get('id') )
        // )
// FOURTH   working
//     this.route.paramMap.pipe(
//         map( (params : ParamMap) => params.get('id') )
//     )
//          .subscribe( ( id ) =>  this.parNum = Number( id ) )
//
//     this.usersService
//         .getUser( this.parNum )
//         .subscribe( ( data : User) => this.aUser = data );
//   }

    this.route.paramMap.pipe(
        switchMap( (params : ParamMap) => {
         const id = Number( params.get('id') );

         return this.usersService.getUser( id )
        })
    )
        .subscribe( ( data : User) => this.aUser = data );
  }
}
