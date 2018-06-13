import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OPERANDS  = 5;
  signs     : string[] = [];
  values    : string[] = [];
  result    : string;
  rawString : string;
  bugBypass : string[] = [];

  constructor(){
    for (let i = 0; i < (this.OPERANDS - 1); i++){
      this.values.push("");
      this.signs.push("");
      this.bugBypass.push("");
    }
    this.values.push("");
    this.bugBypass.push("");
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

  calculate(){
    this.dataValidation();
    this.transformData();
    try {
      this.result = String( eval( this.rawString ) );
    }
    catch ( e ){
      console.log( e );
    }
    console.log(" Values ");
    console.log(this.values);
    console.log(" Signs ");
    console.log(this.signs);
  }

  cleaning(){
    for (let i = 0; i < (this.OPERANDS - 1); i++){
      this.values[i] = "";
       this.signs[i] = "";
    }
    this.values[ this.OPERANDS - 1 ] = "";
    this.result = "";
  }

// Last hope on validation
  dataValidation(){
    this.values.forEach( ( item, i ) => {
        if ( Object.is( Number( item ), NaN ) ){
          this.values[i] = "Here must be DIGITS";
          throw new Error(`Wrong symbols ${item}. You must use DIGITS`);
        }
    });
    this.signs.forEach( ( item, i ) => {
      if ( !Object.is( item.match(/\w+/), null ) ){
          this.signs[i] = "Wrong Symbols";
          throw new Error(`Wrong symbols ${item}`);
      }
    } )
  }
}
