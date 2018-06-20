import { Component, OnInit } from '@angular/core';
import {CalcDataService} from "../calc-data.service";
import { Element } from "../element";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  minLength : number;
  maxLength : number;

  calcLength : number;
      values : string[] = [];
       signs : string[] = [];

  constructor( private calcData : CalcDataService ) {
    this.calcLength = calcData.getLength();
    this. maxLength = calcData.getMIN_LENGTH();
    this. minLength = calcData.getMAX_LENGTH();
    this.    values = calcData.getValues();
    this.     signs = calcData.getSigns();
  }

  ngOnInit() {
  }

  getCurrentLength() : number {
    return this.calcData.getLength();
  }

  setCurrentLength( event ){
    this.calcData.setLength( Number( event.target.value ) );
    this.getCurrentLength();
  }

  getCurrentValues() : string[] {
    return this.calcData.getValues()
  }

  addCurrentValue( element : Element ){
    this.calcData.addValue( element );
  }

  getCurrentSigns() : string[] {
    return this.calcData.getSigns()
  }

  addCurrentSing( element : Element ){
    this.calcData.addSign( element );
  }

  getCurrentResult() : number {
    return this.calcData.getResult();
  }



  update(){

  }
}
