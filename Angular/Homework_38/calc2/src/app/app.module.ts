import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperandComponent } from './operand/operand.component';
import { CalcComponent } from './calc/calc.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    OperandComponent,
    CalcComponent,
    SignComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
