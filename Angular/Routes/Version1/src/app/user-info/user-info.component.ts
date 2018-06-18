import { Component, OnInit }   from '@angular/core';
import { UsersDetailsService } from "../users-details.service";
import {ActivatedRoute, ParamMap, Params}      from "@angular/router";
import { User }                from "../user";
import { map }                 from "rxjs/operator";

@Component({
     selector: 'app-user-info',
  templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  aUser : User;
  param : number;

  constructor(
      private usersService : UsersDetailsService,
      private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    //this.user = this.usersService.getUser( 1 );

    // Observable с текущем состоянием параметров
    // thi s.route.paramMap
    //     .subscribe( ( params : Params ) => console.log( params.get('id') ) )

    this.route.paramMap.pipe(
        map( (params : ParamMap) => params.get('id') )
    )
        .subscribe( ( id ) => console.log( id ) )

    this.usersService
        .getUser( 1 )
        .subscribe( ( data : User) => this.aUser = data );
  }
}
