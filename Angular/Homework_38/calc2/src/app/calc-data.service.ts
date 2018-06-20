import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalcDataService {

  calcLength : number = 2;
      values : string[];
       signs : string[];
      result : number;

  constructor() { }

  getValues() : string[] {
    return this.values;
  }

  addValue( aValue : string, id : number ){
    this.values[ id ] = aValue;
  }

  getSigns() : string[] {
    return this.signs;
  }

  addSign( data : string, id : number ){
    this.signs[ id ] = data;
  }

  getResult() : number {
    return this.result;
  }

  getLength() : number {
    return this.calcLength;
  }

  setLength( len : number ){
    this.calcLength = len;
  }
}
