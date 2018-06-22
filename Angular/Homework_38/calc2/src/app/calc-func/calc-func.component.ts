import { Component, OnInit } from '@angular/core';
import {CalcDataService} from "../calc-data.service";
import { Element } from "../element";

@Component({
  selector: 'app-calc-func',
  templateUrl: './calc-func.component.html',
  styleUrls: ['./calc-func.component.css']
})
export class CalcFuncComponent implements OnInit {

     result : number;
     values : string[] = [];
  signsList : string[] = [];

  constructor( private calcData : CalcDataService ) {
    this.getCurrentValues();
    this.signsList = this.calcData.signsListInit();
  }

  ngOnInit() {
  }

  getCurrentValues() : void {
    this.values = this.calcData.getValues()
  }

  addCurrentValue( elem : Element ) : void {
    this.calcData.addValue( elem );
  }
  addCurrentSign( elem : Element ){
      console.log( elem );
    this.calcData.addSign( elem );
  }

  getCurrentResult() : void {
    this.result = this.calcData.calculateResultSecond()
  }

  clearCurrentData(){
    this.calcData.clearData()
  }
}
