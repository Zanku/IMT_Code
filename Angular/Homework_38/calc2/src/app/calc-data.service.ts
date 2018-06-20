import { Injectable } from '@angular/core';

const LENGTH = 5;


@Injectable({
  providedIn: 'root'
})
export class CalcDataService {

  values : string[];
   signs : string[];
  result : number;

  constructor() { }

  getValues() : string[] {
    return this.values;
  }

  addValue( data : string, id : number ){
    this.values[ id ] = data;
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
}
