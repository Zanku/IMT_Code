import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OPERANDS  = 5;
  signs : string[] = [];
  values : string[] = [];
  result : number;
  rawString : string;

  constructor(){
    for (let i = 0; i < (this.OPERANDS - 1); i++){
      this.values.push("");
      this.signs.push("");
    }
    this.values.push("");
  }

// because signs.length if shorter, we use it and add last element of values
  transformData(){
    this.rawString = "";
    this.signs.forEach( ( sign, i ) => {
      this.rawString += ( this.values[i] + sign ) ;
    } );
    this.rawString += this.values[ this.signs.length ];
    console.log( this.rawString);
  }

  test(){
    console.log( this.values );
    console.log( this.signs );
  }
}
