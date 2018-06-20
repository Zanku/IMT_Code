import { Component, OnInit } from '@angular/core';
import {CalcDataService} from "../calc-data.service";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor( private calcData : CalcDataService ) { }

  ngOnInit() {
  }

  
}
