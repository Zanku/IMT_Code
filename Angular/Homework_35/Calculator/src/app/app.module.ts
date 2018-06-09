import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperandComponent } from './operand/operand.component';
import { SingComponent } from './sign/sign.component';
import { ResultComponent } from './result/result.component';
import { ButtonComponent } from './button/button.component';
import { ValidationDirective } from './validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    OperandComponent,
    SingComponent,
    ResultComponent,
    ButtonComponent,
    ValidationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
