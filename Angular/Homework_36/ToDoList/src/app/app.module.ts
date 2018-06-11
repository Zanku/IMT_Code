import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { ChangeStatusDirective } from './change-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent,
    ChangeStatusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

