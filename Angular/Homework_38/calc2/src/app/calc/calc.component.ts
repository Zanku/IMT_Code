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
      result : number;
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

  setCurrentLength( event ) : void {
    this.calcData.setLength( Number( event.target.value ) );
    this.getCurrentLength();
  }

  getCurrentValues() : string[] {
    return this.calcData.getValues()
  }

  addCurrentValue( element : Element ) : void {
    this.calcData.addValue( element );
  }

  getCurrentSigns() : string[] {
    return this.calcData.getSigns()
  }

  addCurrentSign(element : Element ) : void {
    this.calcData.addSign( element );
  }

  getCurrentResult() : void {
    this.result = this.calcData.getResult();
  }

  calculateCurrentResultEval() : void {
    this.calcData.calculateResultEval();
  }

  clearCurrentData() : void{
    this.calcData.clearData();
  }
}
