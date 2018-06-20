import { Component, OnInit } from '@angular/core';
import {CalcDataService} from "../calc-data.service";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  calcLength : number;
      values : string[];
       signs : string[];

  constructor( private calcData : CalcDataService ) {
    this.calcLength = this.getCurrentLength();
  }

  ngOnInit() {
  }

  getCurrentLength() : number {
    return this.calcData.getLength();
  }

  setCurrentLength( len : number ){
    this.calcData.setLength( len );
  }

  getCurrentValues() : string[] {
    return this.calcData.getValues()
  }
  
  addCurrentValue( aValue : string, id : number ){
    this.calcData.addValue( aValue, id );
  }

  getCurrentSigns() : string[] {
    return this.calcData.getSigns()
  }

  addCurrentSing( aSign : string, id : number ){
    this.calcData.addSign( aSign, id );
  }

  getCurrentResult() : number {
    return this.calcData.getResult();
  }

}
