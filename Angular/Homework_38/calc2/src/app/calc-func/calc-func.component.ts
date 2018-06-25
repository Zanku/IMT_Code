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

  addCurrentSign( elem : Element ) : void {
    this.calcData.addSign( elem );
  }

  getCurrentResult() : void {
    this.result = this.calcData.getResult()
  }

  calculateResult() : void {
    this.calcData.calculateResultSecond();
    this.getCurrentResult();
  }

  clearCurrentData( form : object ) : void {
    this.calcData.clearData( form )
    this.getCurrentResult();
  }

  onSubmit( form ){
    // Баг с проверкой    !!!!!!!!!!!!!!!!!!!!!!!!!!

    //if ( form.touched === true && form.status === "VALID"){
    console.log( form );
    this.calculateResult();
    //}
  }
}
