import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BasketComponent } from './basket/basket.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';


const  appRoutes : Route[] = [
  { path : '', redirectTo : "main", pathMatch : "full"  },
  { path : 'main',      component : MainComponent },
  { path : 'users',     component : UsersComponent },
  { path : 'contacts',  component : ContactsComponent },
  { path : 'basket',    component : BasketComponent },
  { path : '**',        component : NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent,
    ContactsComponent,
    BasketComponent,
    NotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
