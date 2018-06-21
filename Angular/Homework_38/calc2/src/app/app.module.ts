import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperandComponent } from './operand/operand.component';
import { CalcComponent } from './calc/calc.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from "@angular/forms";
import { ResultComponent } from './result/result.component';
import { SwitchComponent } from './switch/switch.component';
import { CalcFuncComponent } from './calc-func/calc-func.component';
import { RouterModule, Routes } from "@angular/router";
import { SignFuncComponent } from './sign-func/sign-func.component';

const routes : Routes = [
  { path : '', redirectTo : 'Hell', pathMatch : 'full' },
  { path : 'Hell', component : CalcComponent },
  { path : 'Heaven', component : CalcFuncComponent },
  { path : 'AllRoadsLeadToHELL&OnliOneToHeaven', component : CalcComponent },
  { path : "**", redirectTo : 'AllRoadsLeadToHELL&OnliOneToHeaven' }
];

@NgModule({
  declarations: [
    AppComponent,
    OperandComponent,
    CalcComponent,
    SignComponent,
    ResultComponent,
    SwitchComponent,
    CalcFuncComponent,
    SignFuncComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
