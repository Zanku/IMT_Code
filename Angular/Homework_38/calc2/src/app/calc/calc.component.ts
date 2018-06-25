import { Component, OnInit, DoCheck } from '@angular/core';
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

  setCurrentLength( event ) : void {
    this.calcData.setLength( Number( event.target.value ) );
  }

  addCurrentValue( element : Element ) : void {
    this.calcData.addValue( element );
  }

  addCurrentSign(element : Element ) : void {
    this.calcData.addSign( element );
  }

   getCurrentResult() : void {
   this.result = this.calcData.getResult();
   }


  calculateCurrentResultEval() : void {
    this.calcData.calculateResultEval();
    this.getCurrentResult();
  }

  clearCurrentData( form : object ) : void{
    this.calcData.clearData( form );
    this.getCurrentResult();

  }

  /*
   getCurrentLength() : number {
   return this.calcData.getLength();
   }
   */
  /*
   getCurrentSigns() : string[] {
   return this.calcData.getSigns()
   }
   */
  /*
   getCurrentValues() : string[] {
   return this.calcData.getValues()
   }
   */

  onSubmit( form ){
// Баг с проверкой    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //if ( form.touched === true && form.status === "VALID"){
      this.calculateCurrentResultEval();
    //}
  }
}
