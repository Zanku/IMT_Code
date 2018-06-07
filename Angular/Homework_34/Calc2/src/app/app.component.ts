import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // @Output() updateVal = new EventEmitter();
  PHRASE = "";
  NONE = "none";
  value = [0, 0];
  result : number;
  warn  = ["none", "none"];


  onBtnClick(){
    this.result = this.calculate( ...this.value );
  }


  changeData( event ){
    let inputData  = Number( event.target.value );

    if ( Object.is( inputData, NaN ) ){
      this.warning( event.target.id );

    } else {
      this.value[event.target.id] = inputData;
      this.clearWarning( event.target.id );
    }
  }

  calculate( ...numbers ) {
    let result = 0;
    numbers.forEach(number => {
      result += number;
    })
    return result;
  }

  warning( id ){
    this.warn[ id ] = this.PHRASE;
  }

  clearWarning( id ){
    this.warn[ id ] = this.NONE;
  }
}
