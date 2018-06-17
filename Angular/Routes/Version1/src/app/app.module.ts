import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';


const  appRoutes : Route[] = [
//  { path : 'users', component : UsersComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
