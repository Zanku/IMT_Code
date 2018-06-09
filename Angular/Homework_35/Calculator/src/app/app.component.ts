import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OPERANDS  = 5;
  sign : string[] = [];
  values : string[] = [];
  result : number;
  rawString : string;

  constructor(){
    for (let i = 0; i < (this.OPERANDS - 1); i++){
      this.values.push("");
      this.sign.push("");
    }
    this.values.push("");
  }

  transformData(){
    
  }

  test(){
    console.log( this.values );
    console.log( this.sign );
  }
}
