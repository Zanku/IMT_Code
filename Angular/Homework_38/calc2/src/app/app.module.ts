import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperandComponent } from './operand/operand.component';
import { CalcComponent } from './calc/calc.component';
import { SignComponent } from './sign/sign.component';
import {FormsModule} from "@angular/forms";
import { ResultEvalComponent } from './result-eval/result-eval.component';

@NgModule({
  declarations: [
    AppComponent,
    OperandComponent,
    CalcComponent,
    SignComponent,
    ResultEvalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
