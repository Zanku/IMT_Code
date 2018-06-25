import {Injectable, OnInit} from '@angular/core';
import { Element } from './element';

const MAX_LENGTH = 100;
const MIN_LENGTH = 2;



@Injectable({
  providedIn: 'root'
})
export class CalcDataService implements OnInit{

  private operation = {
  '+' : this.operandsSumming,
  '-' : this.operandsSubtraction,
  '*' : this.operandsMultipling,
  '/' : this.operandsSeparation
}

  private   calcLength : number = MIN_LENGTH;
  private       values : string[] = [];
  private valuesNumber : number[] = [];
  private        signs : string[] = [];
  private       result : number;

  constructor() {
    this.elemsInit();
  }

  ngOnInit(){
  }

  getValues() : string[] {
    return this.values;
  }

  addValue( element : Element ) : void {
    this.values[ element.index ] = element.aValue;
  }

  getSigns() : string[] {
    return this.signs;
  }

  addSign( element : Element ) : void {
    this.signs[ element.index ] = element.aValue;
  }

  getLength() : number {
    return this.calcLength;
  }

  setLength( len : number ){
    this.calcLength = this.lengthMinValueCheak( len );
    this.elemsInit();
  }

  lengthMinValueCheak( len : number ){
    if ( len < MIN_LENGTH ){
      return MIN_LENGTH;
    } else {
      return len;
    }
  }

  getMAX_LENGTH() : number {
    return MAX_LENGTH;
  }

  getMIN_LENGTH() : number {
    return MIN_LENGTH;
  }

  elemsInit(){
    this.   calcLength = this.getLength();
    this. signs.length = MIN_LENGTH - 1;
    this.values.length = MIN_LENGTH;

    for ( let i = 0; i < (this.calcLength - 1); i++){
      this.values[i] = "";
      this. signs[i] = "";
    }
    this.values[ this.calcLength - 1 ] =  "";
  }

  getResult() : number {
    return this.result;
  }

  calculateResultEval(){
    try{
      return this.result = eval( this.getStringResult() );
    }
    catch (e){
      console.log(`calculateResultEval has some troubles: ${e}`);
    }
  }

  getStringResult() : string {
    let result = '';

    for ( let i = 0; i < this.signs.length; i++ ){
      result += this.values[ i ] + this.signs[ i ]
    }
    result += this.values[ this.signs.length ];

    return result;
  }

  clearData( form : object ) : void {
    this.elemsInit();
    this.result = undefined;
    this.formCleaning( form );
  }




// functions for SECOND module


  calculateResultSecond() : void {
    this.trabsformStringToNumber();

    this.result = this.operation[
        this.signCheak( this.signs[0] )
    ]( this.valuesNumber[0], this.valuesNumber[1] );
  }

  operandsSumming    ( first : number, second : number ) : number {
    return first + second;
  }

  operandsSubtraction( first : number, second : number ) : number {
    return first - second;
  }

  operandsMultipling ( first : number, second : number ) : number {
    return first * second;
  }

  operandsSeparation ( first : number, second : number ) : number {
    return first / second;
  }

  signsListInit() : string[] {
    let signsList : string[] = [];
    for ( let key in this.operation ){
      signsList.push( key )
    }
    return signsList;
  }

  signCheak( sign : string ) : string {

    if ( this.operation[ sign ] ){
        return sign
    } else {
      return '+'
    }
  }

  trabsformStringToNumber() : void {
      for ( let i = 0; i < MIN_LENGTH; i++){
          this.cheakEmpty( this.values[i] );
          this.valuesNumber[i] = Number( this.values[i] );
          this.cheakNaN( this.valuesNumber[i] )
      }
  }

  cheakNaN( num : number ) : void {
      if ( Object.is( num, NaN ) ){
          throw new Error("You have Symbols in Heaven, but here must be Digits")
      }
  }

  cheakEmpty( str : string ) : void {
      if ( str === '' ){
          throw new Error("Fill in all the fields");
      }
  }

  formCleaning( form : any ) : void {
    form.pristine = true;
    form.touched = false;
  }
}
